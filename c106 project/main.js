function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/p57WFvwecC/model.json', modelReady);}

    modelReady(){
        classifier.classify(){
            gotResults(){
                console.error();
                console.log(results)
            }
        }
    }