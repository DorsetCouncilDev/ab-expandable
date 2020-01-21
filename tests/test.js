const abExpanded = require('../js/ab-expandable'); 

beforeAll(() => {
    document.body.innerHTML = '<div class="ab-expandable">'+
    '<div class="ab-exapndable-button" role="button" aria-expanded="false" aria-controls="expand1">Expand me</div>'+
    '<div class="ab-expandable-area" id="expand1">Expanded content 1</div></div>';
    abExpanded();   
});

test('initial state check aria expanded false', () => {
    var button = document.getElementsByClassName("ab-exapndable-button")[0];
    expect(button.getAttribute("aria-expanded")).toBe("false"); 
});

test('initial state check display none', () => {
    var button = document.getElementsByClassName("ab-expandable-area")[0];
    expect(button.style.display).toBe("none"); 
});

test('check aria expanded true', () => {
    var button = document.getElementsByClassName("ab-exapndable-button")[0];
    button.click();
    expect(button.getAttribute("aria-expanded")).toBe("true"); 
});

test('check display block', () => {
    var button = document.getElementsByClassName("ab-expandable-area")[0];
    expect(button.style.display).toBe("block"); 
});

test('check aria expanded false', () => {
    var button = document.getElementsByClassName("ab-exapndable-button")[0];
    button.click();
    expect(button.getAttribute("aria-expanded")).toBe("false");
});

test('check display none', () => {
    var button = document.getElementsByClassName("ab-expandable-area")[0];
    expect(button.style.display).toBe("none"); 
});