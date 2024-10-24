docker stop udcp-nginx-1
certbot certonly --standalone -d leapstage.centralus.cloudapp.azure.com
cp /etc/letsencrypt/live/leapstage.centralus.cloudapp.azure.com/privkey.pem /UDCP/udcp/local_shares/keys/privkey.pem
cp /etc/letsencrypt/live/leapstage.centralus.cloudapp.azure.com/fullchain.pem /UDCP/udcp/local_shares/keys/fullchain.pem
docker start udcp-nginx-1