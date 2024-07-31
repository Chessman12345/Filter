const list = document.querySelector('.list');
const item = document.querySelectorAll('.blocks__item');
const listItem = document.querySelectorAll('.list__item')

function filter() {
    list.addEventListener('click', (e) => {
        const targetID = e.target.dataset.id
        const target = e.target

        if (target.classList.contains('list__item')) {
            listItem.forEach(item => item.classList.remove('active'));
            target.classList.add('active')
        }


        switch (targetID) {
            case 'all':
                getItem('blocks__item')
                break;
            case 'winter':
                getItem(targetID)
                break;
            case 'autumn':
                getItem(targetID)
                break;
            case 'summer':
                getItem(targetID)
                break;
            case 'spring':
                getItem(targetID)
                break;
        }
    })
}
filter()

function getItem(className) {
    item.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}