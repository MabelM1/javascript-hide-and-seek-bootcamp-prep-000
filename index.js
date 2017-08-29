function getFirstSelector(selector) {
  const element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  const element = document.querySelector('#nested div.target');
  return element;
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
      var oldValue =  parseInt(lis[i].innerHTML);
      var newValue = (oldValue + n);
      lis[i].innerHTML = (newValue).toString();
  }
}

function deepestChild() {
    const element = document.querySelector('#grand-node div div div div');
    return element;
}
