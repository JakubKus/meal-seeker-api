npm run migration-in-docker:run
if [ $? -ne 0 ]; then
  echo "Error: Command failed"
  exit
else
  npm run start:dev
fi
