// The DOM element you wish to replace with Tagify
var input = document.querySelector('input[name=basic]');

// initialize Tagify on the above input node reference
new Tagify(input)


/**
 * 
 * Mix Text & Tags
 *  
 **/ 

// Define two types of whitelists, each used for the dropdown suggestions menu,
// depending on the prefix pattern typed (@/#). See settings below.
var whitelist_1 = [
    { value: 100, text: 'React', title: 'facebook' },
    { value: 200, text: 'Vue', title: 'Kelly Young' },
    { value: 300, text: 'Angular', title: 'Google' },
    { value: 400, text: 'Svelte', title: 'Rich Harris' },
    { value: 500, text: 'NextJS', title: 'Vercel' },
    { value: 600, text: 'Python', title: 'Guido van Rossum' },
    { value: 700, text: 'PHP', title: 'Rasmus Lerdorf' },
    { value: 800, text: 'Strapi', title: 'Open Source' },
    { value: 900, text: 'Wordpress', title: 'Automatic' },
    { value: 1000, text: 'Typescript', title: "Microsoft" }
  ]

// Second whitelist, which is shown only when starting to type "#".
// Thiw whitelist is the most simple one possible.
var whitelist_2 = ['Microsoft', 'Apple', 'Google', 'Samsung', 'Esty', 'Github', 'Amazon', 'Ebay', 'FedEx', 'Facebook'];


 
/**
 * 
 * Render Suggestion
 *  
 **/ 



/**
 * 
 * Users List
 *  
 **/ 


// https://www.mockaroo.com/


var inputElm = document.querySelector('input[name=users-list-tags]');

function tagTemplate(tagData){
    return `
        <tag title="${tagData.email}"
                contenteditable='false'
                spellcheck='false'
                tabIndex="-1"
                class="tagify__tag ${tagData.class ? tagData.class : ""}"
                ${this.getAttributes(tagData)}>
            <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
            <div>
                <div class='tagify__tag__avatar-wrap'>
                    <img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
                </div>
                <span class='tagify__tag-text'>${tagData.name}</span>
            </div>
        </tag>
    `
}

function suggestionItemTemplate(tagData){
    return `
        <div ${this.getAttributes(tagData)}
            class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}'
            tabindex="0"
            role="option">
            ${ tagData.avatar ? `
            <div class='tagify__dropdown__item__avatar-wrap'>
                <img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
            </div>` : ''
            }
            <strong>${tagData.name}</strong>
            <span>${tagData.email}</span>
        </div>
    `
}

// initialize Tagify on the above input node reference
var usrList = new Tagify(inputElm, {
    tagTextProp: 'name', // very important since a custom template is used with this property as text
    enforceWhitelist: true,
    skipInvalid: true, // do not remporarily add invalid tags
    dropdown: {
        closeOnSelect: false,
        enabled: 0,
        classname: 'users-list',
        searchKeys: ['name', 'email']  // very important to set by which keys to search for suggesttions when typing
    },
    templates: {
        tag: tagTemplate,
        dropdownItem: suggestionItemTemplate
    },
    whitelist: [
        {
            "value": 1,
            "name": "Crack_Chain block pool:1",
            "avatar": "../assets/images/logo.png",
            "email": "@c3k:125.25.25.1"
        },
        {
            "value": 2,
           "name": "Crack_Chain block pool:2",
                "avatar": "../assets/images/logo.png",
                   "email": "@c3k:125.25.25.2"
        },
        {
            "value": 3,
             "name": "Crack_Chain block pool:3",
                "avatar": "../assets/images/logo.png",
                    "email": "@c3k:125.25.25.3"
        },
        {
            "value": 4,
           "name": "Crack_Chain block pool:4",
              "avatar": "../assets/images/logo.png",
                   "email": "@c3k:125.25.25.4"
        },
        {
            "value": 5,
           "name": "Crack_Chain block pool:5",
                "avatar": "../assets/images/logo.png",
                   "email": "@c3k:125.25.25.5"
        },
        {
            "value": 6,
            "name": "Crack_Chain block pool:6",
        "avatar": "../assets/images/logo.png",
                 "email": "@c3k:125.25.25.6"
        },
        {
            "value": 7,
             "name": "Crack_Chain block pool:7",
               "avatar": "../assets/images/logo.png",
                  "email": "@c3k:125.25.25.7"
        },
        {
            "value": 8,
             "name": "Crack_Chain block pool:8",
          "avatar": "../assets/images/logo.png",
                   "email": "@c3k:125.25.25.8"
        },
        {
            "value": 9,
             "name": "Crack_Chain block pool:9",
              "avatar": "../assets/images/logo.png",
                   "email": "@c3k:125.25.25.9"
        },
        {
            "value": 10,
              "name": "Crack_Chain block pool:10",
                "avatar": "../assets/images/logo.png",
                  "email": "@c3k:125.25.25.10"
        },
        {
            "value": 11,
             "name": "Crack_Chain block pool:11",
             "avatar": "../assets/images/logo.png",
                  "email": "@c3k:125.25.25.11"
        },
        {
            "value": 12,
             "name": "Crack_Chain block pool:12",
               "avatar": "../assets/images/logo.png",
                   "email": "@c3k:125.25.25.12"
        },
    ]
})

usrList.on('dropdown:show dropdown:updated', onDropdownShow)
usrList.on('dropdown:select', onSelectSuggestion)

var addAllSuggestionsElm;

function onDropdownShow(e){
    var dropdownContentElm = e.detail.tagify.DOM.dropdown.content;

    if( usrList.suggestedListItems.length > 1 ){
        addAllSuggestionsElm = getAddAllSuggestionsElm();

        // insert "addAllSuggestionsElm" as the first element in the suggestions list
        dropdownContentElm.insertBefore(addAllSuggestionsElm, dropdownContentElm.firstChild)
    }
}

function onSelectSuggestion(e){
    if( e.detail.elm == addAllSuggestionsElm )
        usrList.dropdown.selectAll();
}

// create a "add all" custom suggestion element every time the dropdown changes
function getAddAllSuggestionsElm(){
    // suggestions items should be based on "dropdownItem" template
    return usrList.parseTemplate('dropdownItem', [{
            class: "addAll",
            name: "Add all",
            email: usrList.whitelist.reduce(function(remainingSuggestions, item){
                return usrList.isTagDuplicate(item.value) ? remainingSuggestions : remainingSuggestions + 1
            }, 0) + " Members"
        }]
      )
}





/**
 * 
 *  Single Value Select
 * 
 */

var input = document.querySelector('input[name=tags-select-mode]'),
    tagify = new Tagify(input, {
        enforceWhitelist: true,
        mode : "select",
        whitelist: ["first option", "second option", "third option"],
        blacklist: ['foo', 'bar'],
    })

// bind events
tagify.on('add', onAddTag)
tagify.DOM.input.addEventListener('focus', onSelectFocus)

function onAddTag(e){
    console.log(e.detail)
}

function onSelectFocus(e){
    console.log(e)
}


     
