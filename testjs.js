let tags = document.querySelectorAll('.tag, .table_tag, .table_tag-more');

tags.forEach(element => {
if(element.innerText == 'on-hold') {
    element.classList.toggle('red_tags');
}
}) 