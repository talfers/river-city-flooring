const galleryImgs = [
  {
    url: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/1166406/pexels-photo-1166406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/210463/pexels-photo-210463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/1027508/pexels-photo-1027508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/1813669/pexels-photo-1813669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/709767/pexels-photo-709767.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/1766513/pexels-photo-1766513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/1743226/pexels-photo-1743226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/1884236/pexels-photo-1884236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    url: 'https://images.pexels.com/photos/1082357/pexels-photo-1082357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
]

const masonry = document.querySelector('.masonry');

for(let i=0; i<galleryImgs.length; i++) {
  const height = Math.floor((Math.random() * 300) + 100) + "px";
  const newImg = document.createElement('div');
  newImg.className = "brick";
  masonry.appendChild(newImg);
  newImg.style.backgroundImage = `url('${galleryImgs[i].url}')`;
  newImg.style.height = height;
  newImg.style.lineHeight = height;
}
