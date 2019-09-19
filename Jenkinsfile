pipeline {
  agent {
    docker {
      image 'node:12.10.0-alpine'
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