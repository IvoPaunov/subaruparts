export const getPartImgsUrls = (imgs) => imgs.map(img => '/static/images/parts/' + img)

/*
{
    name: '',
    oem: [''],
    info_url: '',
    price: '',
    currency: 'BGN',
    description: '',
    images: getPartImgsUrls(['']),
    available: true,
},
*/

export const parts = [
    {
        name: 'Облицовка за под - предна',
        oem: ['95011AJ360VH'],
        info_url: 'http://www.catcar.info/subaru/?lang=en&l=ZGlzaz09M3x8bW9kX2lkPT0yfHxtYz09QjE0fHxyZWdpb249PWxoZHx8c3RhcnQ9PTIwMDktMDUtMDF8fGVuZD09fHxwcm9kPT0yMDA5LTA3LTIzfHxzdD09NjB8fHN0cz09eyIxMCI6Ik1hcmtldCIsIjQwIjoiTEVHQUNZXC9KRjFCUkRMWjFBRzAwNDc4MiIsIjUwIjoiQm9keSIsIjYwIjoiOTUwXC8wMShTICtXICtPQksgK1NPQksgK1dPQkspIn18fGZ0cjE9PVd8fGZ0cjI9PTIwWnx8ZnRyMz09NFd8fGZ0cjQ9PTZNVHx8ZnRyNT09MjBEfHxmdHI2PT1MSHx8aWc9PUJ8fHA9PTk1MHx8c3A9PTAxfHxwYWdlNTA9PTI%3D',
        price: '150',
        currency: 'BGN',
        description: 'Добре запазена облицовка за пода, почистена е и не е наводняване, не мирише на мухъл. Единствената забележка е, че има протъркано по педала на съединителя',
        images: getPartImgsUrls(['95011AJ360VH-1.jpg', '95011AJ360VH-2.jpg', '95011AJ360VH-3.jpg', '95011AJ360VH-4.jpg']),
        available: true,

    },
    {
        name: 'Декорация на фар за мъгла (спортен пакет) лаво',
        oem: ['57731AJ530'],
        info_url: 'http://www.catcar.info/subaru/?lang=en&l=ZGlzaz09M3x8bW9kX2lkPT0yfHxtYz09QjE0fHxyZWdpb249PWxoZHx8c3RhcnQ9PTIwMDktMDUtMDF8fGVuZD09MjAxMC0wNy0wMXx8cHJvZD09MjAwOS0xMi0wN3x8c3Q9PTYwfHxzdHM9PXsiMTAiOiJNYXJrZXQiLCI0MCI6IkxFR0FDWVwvSkYxQlI5TFYzQUcwMTIxMzQiLCI1MCI6IkJvZHkiLCI2MCI6IjU5MFwvMDIoUy4oMjBJKzIwUisyMERTKzI1SVMrMjVHVFMpICtXLigyMEkrMjBSKzIwRFMrMjVJUysyNUdUUykpIn18fGZ0cjE9PVd8fGZ0cjI9PTI1NXx8ZnRyMz09NFd8fGZ0cjQ9PTVBVHx8ZnRyNT09MjVHVFN8fGZ0cjY9PUxIfHxpZz09Qnx8cD09NTkwfHxzcD09MDI%3D',
        price: '35',
        currency: 'BGN',
        description: 'Има лека дракстина, която като се почисти няма да личи',
        images: getPartImgsUrls(['57731AJ530-1.jpg']),
        available: true,
    }
]