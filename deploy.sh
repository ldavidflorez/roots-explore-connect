#!/bin/bash

# Configuración
BUCKET_NAME="raices-vivas"  # Cambia por el nombre de tu bucket
REGION="us-east-1"          # Cambia por tu región preferida
DIST_FOLDER="dist"          # Carpeta donde está tu build
AWS_PROFILE="default"       # Cambia por el nombre de tu perfil de AWS

echo "🚀 Desplegando proyecto Vue con el perfil $AWS_PROFILE..."

# 1. Verificar si el bucket existe, si no, crearlo
echo "📦 Verificando bucket: $BUCKET_NAME"
if aws s3api head-bucket --bucket "$BUCKET_NAME" --profile $AWS_PROFILE 2>/dev/null; then
    echo "✅ El bucket $BUCKET_NAME ya existe, saltando creación..."
else
    echo "📦 Creando bucket: $BUCKET_NAME"
    aws s3 mb s3://$BUCKET_NAME --region $REGION --profile $AWS_PROFILE
    
    # 2. Desbloquear acceso público del bucket (solo si es nuevo)
    echo "🔓 Deshabilitando Block Public Access..."
    aws s3api put-public-access-block \
        --bucket $BUCKET_NAME \
        --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false" \
        --profile $AWS_PROFILE

    # 3. Configurar el bucket para hosting web estático (solo si es nuevo)
    echo "🌐 Configurando hosting web estático..."
    aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document index.html --profile $AWS_PROFILE

    # 4. Configurar política pública para el bucket (solo si es nuevo)
    echo "🔓 Configurando permisos públicos..."
    cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF

    # Esperar un poco para que se aplique la configuración de acceso público
    echo "⏳ Esperando que se aplique la configuración..."
    sleep 5

    aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json --profile $AWS_PROFILE
    
    # Limpiar archivo temporal
    rm bucket-policy.json
fi

# 5. Subir/actualizar archivos del proyecto (SIEMPRE se ejecuta)
echo "📤 Subiendo/actualizando archivos desde $DIST_FOLDER..."
aws s3 sync $DIST_FOLDER/ s3://$BUCKET_NAME/ --delete --profile $AWS_PROFILE

# 6. Mostrar URL del sitio web
echo "✅ ¡Despliegue completado!"
echo "🌍 URL del sitio web: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"

echo "🎉 ¡Tu proyecto Vue está actualizado!"