basedir=`pwd`

webapp=${basedir}/src/main/webapp


cd ${webapp}

gulp clean

gulp build

echo "gulp build success"

sleep 5

if [ -d  ${webapp}/resources/scripts ]
then
    rm -rf  ${webapp}/resources/scripts
fi

if [ -d  ${webapp}/resources/styles ]
then
    rm -rf  ${webapp}/resources/styles
fi

mv  ${webapp}/dist/resources/scripts ${webapp}/resources/
mv  ${webapp}/dist/resources/styles ${webapp}/resources/


mv  ${webapp}/dist/index.html   ${webapp}/index1.html;

sleep 5