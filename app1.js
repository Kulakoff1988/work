

const   ButtonAdd = document.querySelector('#add'),
        nameForm = document.querySelector('#nameForm'),
        ageForm = document.querySelector('#ageForm'),
        commentForm = document.querySelector('#commentForm'),
        TemplateRemoveButton = '<input type="button" value="Remove" id="remove">',

        clearForm =() => {
            nameForm.value = '';
            ageForm.value = '';
            commentForm.value = '';
        },


        replacer = (item, template) => {
            for (let key of Object.getOwnPropertyNames(item)) {
                template = template.replace(new RegExp(`%${key}%`), item[key]);
            }
            return template;
        },

        create_DOM_element = (item, template) => {
            const filtered = Object.keys(template).filter(el => typeof template[el] !== 'object');
            console.log(filtered);
            const DOM_name = document.createElement(template.Tag);
            DOM_name.innerText = item.Name;
            /*for (let prop of Object.getOwnPropertyNames(template.NameProperties)) {
                DOM_name.prop = template.NameProperties[prop];
            }*/
            return DOM_name;
        };


class Project1 {
    constructor({   Target = void 0,
                    TemplateName = {},
                    TemplateAge ={},
                    TemplateComment ={},
                    TemplateSaveButton = {},
                    TemplateRemoveButton = {},
                    Users = [],
                }) {
        this.Users = Users;
        this.Target = Target;
        this.TemplateName = TemplateName;
        this.TemplateAge = TemplateAge;
        this.TemplateComment = TemplateComment;
        this.TemplateSaveButton = TemplateSaveButton;
        this.TemplateRemoveButton = TemplateRemoveButton;

        ButtonAdd.addEventListener('click', () => {
            this.Add({  Name: nameForm.value,
                        Age: ageForm.value,
                        Comment: commentForm.value});
            clearForm()
        });

        document.addEventListener('keydown', evt => {
            if(evt.keyCode === 13) {
                this.Add({Name: nameForm.value, Age: ageForm.value, Comment: commentForm.value});
                clearForm()
            }
        });

    }
    
    get Slaves() {
     return this.Users;
    }
    
    set Slaves(data) {
        this.Users = data;
        this._removeCurrentRendering();
        this._render();
    }
    
    Add (item) {
        this.Users.push(item);
        this.Target.appendChild(this._addElementRendering(item));
    };

    RemoveAll () {
        this.Users.length = 0;
        this._removeCurrentRendering();
    }

    _render () {
        for (let u of this.Users) {
            this._addElementRendering(u);
        }
    }

    _removeCurrentRendering (parent = this.Target) {
        while (parent.firstChild) parent.removeChild(parent.lastChild);
    }
    
    _addElementRendering (user) {
        this.Target.appendChild(create_DOM_element(user, this.TemplateName));
        this.Target.appendChild(create_DOM_element(user, this.TemplateAge));
        this.Target.appendChild(create_DOM_element(user, this.TemplateComment));
        this.Target.appendChild(create_DOM_element(user, this.TemplateSaveButton));
        this.Target.appendChild(create_DOM_element(user, this.TemplateRemoveButton));
        /*
        removeButton.addEventListener('click', user => {
            this.Users.splice(this.Users.indexOf(user), 1);
            this.Target.removeChild(newLine);
        });
        saveButton.addEventListener('click', user => {

        });*/
        return this.Target;
    };
}
