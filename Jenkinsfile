pipeline {
  agent any

  tools {nodejs "Default"}

  stages {
    stage('Deploy') {
      steps {
        sh "bash tools/deploy.sh root 192.81.211.75 /var/lib/jenkins/.ssh/id_rsa tiimus-backend tiimus-backend prod"
      }
    }
  }
}