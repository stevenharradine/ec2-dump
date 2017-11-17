CURRENT_DATE=`date +%Y%m%d_%H%M%S`
AUDIT_FILENAME=awsIps.$CURRENT_DATE.audit

echo -n "pulling data from AWS "
node ec2-dump.js next > /dev/null
echo -n ". "
node ec2-dump.js development > /dev/null
echo -n ". "
node ec2-dump.js staging > /dev/null
echo -n ". "
node ec2-dump.js production > /dev/null
echo -n ". "
node ec2-dump.js canada > /dev/null
echo ". done"

echo -n "parsing data "
echo "instance id,ip address" > $AUDIT_FILENAME
node getAllEndpoints.js next >> $AUDIT_FILENAME
node getAllEndpoints.js development >> $AUDIT_FILENAME
node getAllEndpoints.js staging >> $AUDIT_FILENAME
node getAllEndpoints.js production >> $AUDIT_FILENAME
node getAllEndpoints.js canada >> $AUDIT_FILENAME
echo ". done"

echo ""
echo "Audit saved too: $AUDIT_FILENAME"
