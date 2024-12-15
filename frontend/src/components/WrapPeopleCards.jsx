import React from 'react'
import PeopleCard from './PeopleCard'

const WrapPeopleCards = () => {
  return (
    <>
       <div className='container-fluid p-5 fontstyle border'>
         <div className='row p-3 d-flex justify-content-center align-items-center'>
            <div className='p-3'>
             <h2 className='text-center fs-1 fw-semibold'>People who partner with us</h2>
            </div>

            <div className='col-md-4 card mx-4' style={{backgroundColor:"yellow"}}>
              <PeopleCard srcImg={'/images/finance.png'} title={"Finance enthusiast"} content={"Your interest lies in finance and the stock market. You take great pleasure in guiding others with investment options."}/>
            </div>

            <div className='col-md-4 card' style={{backgroundColor:"skyblue"}}>
              <PeopleCard srcImg={'/images/internet.png'} title={"Internet Influencer"} content={"Social media is your playground. You have a good number of followers who easily consume all the content you share."}/>
            </div>
         </div>

         <div className='row p-3 d-flex justify-content-center align-items-center'>
         <div className='col-md-4 card mx-4' style={{backgroundColor:"lightgreen"}}>
              <PeopleCard srcImg={'/images/people.png'} title={"People Person"} content={"People love you! And you love people! So, by default, marketing comes to you, naturally. You can sell, and do it rather well."}/>
            </div>

            <div className='col-md-4 card' style={{backgroundColor:"lightpink   "}}>
              <PeopleCard srcImg={'/images/self.png'} title={"Self Starter"} content={"I am my own boss, that is your mantra. You just want to earn and grow. The desire is powered by your dedication. And that takes you places!"}/>
            </div>
         </div>
       </div>
    </>
  )
}

export default WrapPeopleCards