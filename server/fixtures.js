if (Camps.find().count() === 0) {
    Camps.insert({
        name: 'Coder Camps',
        url: 'https://tcs-paloalto.frontdeskhq.com/courses/44546'
    });
    Camps.insert({
        name: 'CSMA Camp',
        url: 'http://www.arts4all.org/study/camps.htm'
    });
}