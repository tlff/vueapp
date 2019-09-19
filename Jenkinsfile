pipeline {
  agent {
    docker {
      image 'node:12.10.0-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('build') {
      steps {
        sh '''npm -v
npm install'''
      }
    }
  }
}