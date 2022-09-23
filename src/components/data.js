import {faker} from "@faker-js/faker"

//data untuk commment
const dataComment =[
        {
          id:"1",
          name:"ronatio",
          date:"yesterday at 8:00PM",
          comment:"wuihhhh Keren sekali yaa",
          avatar:faker.image.avatar(),
          count:0
        },
        {
          id:"2",
          name:"Dani",
          date:"yesterday at 8:10PM",
          comment:"Iyaa dong Keren banget woyy",
          avatar:faker.image.avatar(),
          count:0
        },
        {
          id:"3",
          name:"Adrian",
          date:"yesterday at 8:30PM",
          comment:"Mantapppp",
          avatar:faker.image.avatar(),
          count: 0
        },
        {
          id:"4",
          name:"Arya",
          date:"Today at 10:03PM",
          comment:"manntappu jiwaa",
          avatar:faker.image.avatar(),
          count:0
        },
      ]
  
//export data untuk diimport di index,js sebagai props
export default dataComment
