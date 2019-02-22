const DocumentList = [
    {ID: 1,   Description: 'Description1', Name: 'expaahrt-1.js', HeadingID: 1, MasterDocumentID: -1},
    {ID: 2,   Description: 'Description1', Name: 'exle-rjt-2.js', HeadingID: 1, MasterDocumentID: 201},
    {ID: 3,   Description: 'Descripjpspf', Name: 'e23rx23g5e.js', HeadingID: 3, MasterDocumentID: -1},
    {ID: 4,   Description: 'Description2', Name: 'expa23rmle.js', HeadingID: 2, MasterDocumentID: -1},
    {ID: 5,   Description: 'Description2', Name: 'expaml235e.js', HeadingID: 2, MasterDocumentID: 4},
    {ID: 6,   Description: 'Description8', Name: 'expa235mle.js', HeadingID: 3, MasterDocumentID: -1},
    {ID: 7,   Description: 'Description1', Name: 'expaml235e.js', HeadingID: 1, MasterDocumentID: 201},
    {ID: 8,   Description: 'Descript9238', Name: 'expaml235e.js', HeadingID: 4, MasterDocumentID: 6},
    {ID: 9,   Description: 'cat1;kldfgdk', Name: 'expaml235e.js', HeadingID: 1, MasterDocumentID: -1},
    {ID: 10,   Description: 'rgh;kldfgdk', Name: 'egpaml235e.js', HeadingID: 2, MasterDocumentID: -1},
    {ID: 11,   Description: 'catfdjdfgdk', Name: 'exhaml235e.js', HeadingID: 3, MasterDocumentID: 1},
    {ID: 12,   Description: 'ca54654ldfgdk', Name: 'ex5aml235e.js', HeadingID: 5, MasterDocumentID: -1},
    {ID: 13,   Description: 'cahfgh46dfgdk', Name: 'e7paml235e.js', HeadingID: 4, MasterDocumentID: -1},
];

const HeadingDict = {
    1: 'Palaces',
    2: 'Shakalo',
    3: 'Furbedo',
    4: 'Butarosuggo',
    5: 'Dubelo',
};

const Target = document.querySelector('.documents');

const newDoc = doc => {
    let newDoc = document.createElement('div');
    newDoc.innerHTML = `<div class="id">ID: ${doc.ID}</div>
                        <div class="name">Name: ${doc.Name}</div>
                        <div class="description">Description: ${doc.Description}</div>`;
    newDoc.classList.add(`documentData`);
    return newDoc;
};

const newMaster = masterID => {
    let newMaster = document.createElement('div');
    newMaster.classList.add(`masterList`);
    newMaster.innerHTML = `<span>MasterID:${masterID}</span>`;
    return newMaster;
};

const newHead = (dict, index) => {
    let newHead = document.createElement('div');
    newHead.innerText = dict[index];
    newHead.classList.add(`headingID`);
    return newHead;
};

const Render = (list, dict) => {
    let result;
    let newHeadTag;
    let newMasterTag;
    let masterID = null;
    let filtered;
    for (let head of Object.keys(dict)) {
        newHeadTag = newHead(dict, head);
        result = list.filter(item => item.HeadingID === +head)
                     .sort((a, b) => a.MasterDocumentID - b.MasterDocumentID);
        let newTargetTag = document.createElement('div');
        newTargetTag.classList.add('newDocList');
        for (let doc of result) {
            if (masterID !== doc.MasterDocumentID) {
                masterID = doc.MasterDocumentID;
                filtered = result.filter(item => item.MasterDocumentID === masterID);
                newMasterTag = newMaster(masterID);
                for (let doc of filtered) {
                    newMasterTag.appendChild(newDoc(doc));
                }
                newTargetTag.appendChild(newHeadTag);
                newTargetTag.appendChild(newMasterTag);
                Target.appendChild(newTargetTag);
            }
        }
    }
};

Render(DocumentList, HeadingDict);