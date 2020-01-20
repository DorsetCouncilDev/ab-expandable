const abExpanded = require('../js/ab-expandable'); 

beforeAll(() => {
    document.body.innerHTML = '<div class="ab-expandable">'+
    '<div class="ab-exapndable-button" role="button" aria-expanded="false" aria-controls="expand1">Expand me</div>'+
    '<div class="ab-expandable-area" id="expand1">Expanded content 1</div></div>';
    abExpanded();   
});

test('check expanded', () => {
    var button = document.getElementsByClassName("ab-exapndable-button")[0];
    button.click();
    expect(button.getAttribute("aria-expanded")).toBe("true"); 
});

test('check display', () => {
    var button = document.getElementsByClassName("ab-expandable-area")[0];
    expect(button.style.display).toBe("block"); 
});

test('check not expanded', () => {
    var button = document.getElementsByClassName("ab-exapndable-button")[0];
    button.click();
    expect(button.getAttribute("aria-expanded")).toBe("false");
});

test('check no display', () => {
    var button = document.getElementsByClassName("ab-expandable-area")[0];
    expect(button.style.display).toBe("none"); 
});