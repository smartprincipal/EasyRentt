import React, { useState, useEffect} from 'react'
import './Post.css';
import { slice, concat} from 'lodash';
import Victoria from '../../Assets/Victoria.png';
import Lekki2 from '../../Assets/lekki2.png';
import Lekki from '../../Assets/lekki.png';
import Maryland from '../../Assets/maryland.png';
import Ajah from '../../Assets/ajah.png';
import Bed from '../../Assets/bed.svg';
import Bath from '../../Assets/bath.svg';
import CatalogueCard from '../../Components/CatalogueCard/CatalogueCard';
import Button from '../Button/Button';

const Post = () => {

 const moreStyle ={
  background: "#FCBC0E",
  width: "250px",
  height: "60px",
  fontFamily: "Inter",
  fontSize: "32px",
  fontWeight: "500px",
  lineHeight: "39px",
  textAlign: "center",
  color: "#FFF",
  border:"none"
};

const LENGTH = 24;
const DATA = [ ...Array(LENGTH).keys() ];
// const IMAGE_SRC="https://source.unsplash.com/random";
const LIMIT = 6;
const [showMore,setShowMore] = useState(true);
  const [list,setList] = useState(slice(DATA, 0, LIMIT))
  const [index,setIndex] = useState(LIMIT);

  const loadMore = () =>{
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (LENGTH - 1);
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  }

 // const [post, setPost] = useState([])
 //  const [isCompleted, setIsCompleted] = useState(false)
 //  const [index, setIndex] = useState(5)
 //  const initialPosts = slice(post, 0, index)
 //  const getData = () => {
 //    fetch('https://jsonplaceholder.typicode.com/posts')
 //      .then((res) => res.json())
 //      .then((json) => setPost(json))
 //      .catch((e) => console.log(e))
 //  }
 //  const loadMore = () => {
 //    setIndex(index + 5)
 //    console.log(index)
 //    if (index >= post.length) {
 //      setIsCompleted(true)
 //    } else {
 //      setIsCompleted(false)
 //    }
 //  }
 //  useEffect(() => {
 //    getData()
 //  }, []);

  const catalogue= [
      
   {id:0, catalogueImg: Victoria, catalogueHead:`Magnolia Height`, catalogueAmount:`₦505,000,000`, catalogueBed:`2`,catalogueBath:`2`, catalogueBathImg: Bath,   catalogueBedImg: Bed},
   
   {id:1, catalogueImg: Lekki2, catalogueHead:`Suit 9  Bedroom`, catalogueAmount:`₦205,000,000`, catalogueBed:`5`, catalogueBath:`5`, catalogueBathImg:Bath,   catalogueBedImg: Bed},
   
   {id:2, catalogueImg: Lekki, catalogueHead:`Magnolia Height`, catalogueAmount:`₦505,000,000`, catalogueBed:`1`, catalogueBath:`4`, catalogueBathImg:Bath ,  catalogueBedImg: Bed},

   {id:3, catalogueImg: Maryland, catalogueHead:`Suit 9  Bedroom`, catalogueAmount:`₦205,000,000`, catalogueBed:`7`, catalogueBath:`5`, catalogueBathImg:Bath ,  catalogueBedImg: Bed},
   
   {id:4, catalogueImg: Ajah, catalogueHead:`Magnolia Height`, catalogueAmount:`₦505,000,000`, catalogueBed:`3`, catalogueBath:`2`, catalogueBathImg:Bath ,  catalogueBedImg: Bed},
   
   {id:5, catalogueImg: Victoria, catalogueHead:`Suit 9  Bedroom`, catalogueAmount:`₦205,000,000`, catalogueBed:`5`, catalogueBath:`4`, catalogueBathImg:Bath,   catalogueBedImg: Bed},

   {id:6, catalogueImg: Victoria, catalogueHead:`Magnolia Height`, catalogueAmount:`₦505,000,000`, catalogueBed:`2`,catalogueBath:`2`, catalogueBathImg: Bath,   catalogueBedImg: Bed},
   
   {id:7, catalogueImg: Lekki2, catalogueHead:`Suit 9  Bedroom`, catalogueAmount:`₦205,000,000`, catalogueBed:`5`, catalogueBath:`5`, catalogueBathImg:Bath,   catalogueBedImg: Bed},
   
   {id:8, catalogueImg: Lekki, catalogueHead:`Magnolia Height`, catalogueAmount:`₦505,000,000`, catalogueBed:`1`, catalogueBath:`4`, catalogueBathImg:Bath ,  catalogueBedImg: Bed},

   {id:9, catalogueImg: Maryland, catalogueHead:`Suit 9  Bedroom`, catalogueAmount:`₦205,000,000`, catalogueBed:`7`, catalogueBath:`5`, catalogueBathImg:Bath ,  catalogueBedImg: Bed},
   
   {id:10, catalogueImg: Ajah, catalogueHead:`Magnolia Height`, catalogueAmount:`₦505,000,000`, catalogueBed:`3`, catalogueBath:`2`, catalogueBathImg:Bath ,  catalogueBedImg: Bed},
   
   {id:11, catalogueImg: Victoria, catalogueHead:`Suit 9  Bedroom`, catalogueAmount:`₦205,000,000`, catalogueBed:`5`, catalogueBath:`4`, catalogueBathImg:Bath,   catalogueBedImg: Bed}

 ]
  return (
    <div>
     {/* Catalogue Card */}
     <div className="catalogueContainer">{
      catalogue.map((choice) => (
        <CatalogueCard 
        catalogueImg={choice.catalogueImg} 
        catalogueHead={choice.catalogueHead} 
        catalogueAmount={choice.catalogueAmount} 
        catalogueBedImg={choice.catalogueBedImg}
        catalogueBathImg={choice.catalogueBathImg}
        catalogueBed={choice.catalogueBed}
        catalogueBath={choice.catalogueBath}
        />
      ))
     }
     </div>

     {/* Import Button */}
<div className="more">
{showMore && <Button style={moreStyle} text={"More"} onClick={loadMore} cursor='pointer'/>}
</div>
    </div>
  )
}

export default Post