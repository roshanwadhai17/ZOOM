
"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function About() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const carouselItems = [
    {
      image: "/images/roshan.jpeg",
      alt: "Team Member 1",
      name: `Roshan Wadhai (TY Btech)`,
      desc:'Team Leader'
    },
    {
      image: "/images/omi.jpeg",
      alt: "Team Member 2",
      name: "Om Mahajan (TY Btech)",
      desc:'Team Member'
    },
    {
      image: "/images/rohan.jpeg",
      alt: "Team Member 3",
      name: "Rohan Patil (TY Btech)",
      desc:'Team Member'
    }
  ];
  
  return (
    
    
    
    
    <div className="flex justify-center text-white "> 



    <div className="container mx-auto p-8">
      <h1 className="text-[40px] font-bold text-white ">About Us</h1><br />
   
      <p className="text-lg mb-4">
        Welcome to our Yoom-like video conferencing tool! We're dedicated to providing you with a seamless and secure platform for all your virtual meeting needs.
      </p>
      <p className="text-lg mb-4">
        Built with the latest technologies such as Next.js, TypeScript, Clerk, Stream, Shadcn, and Tailwind CSS, our platform offers a modern and intuitive user experience.
      </p>
      <p className="text-lg mb-4">
        With our tool, you can securely log in, create meetings, and access various meeting functionalities such as recording, screen sharing, and managing participants. Whether you're hosting a business meeting, conducting a virtual event, or catching up with friends and family, we've got you covered.
      </p>
      <p className="text-lg">
        Thank you for choosing our platform for your video conferencing needs. We're committed to continuously improving and adding new features to enhance your experience.
      </p>
    </div>
        
        
        
        <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-lg border-none" // Remove border from the carousel
        style={{ width: "100%", height: "100%" }} // Set width and height to cover the screen and form a rectangle
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <div className="flex justify-center mb-4"> {/* Aligning "Our Team" text at the center */}
          {/* <p className="text-[50px] font-bold text-white">Our Team</p>\ */}
      
    
        </div>
        
        <CarouselContent>
          
        {carouselItems.map((item, index) => (
          
          <CarouselItem key={index}>
            <div className="p-1"><br /><br /><br />
              <Card className="w-full h-[380px] flex relative border-dark-2 bg-dark-2"> {/* Adding relative positioning */}
                <div className="absolute inset-0 flex flex-col items-center justify-center"> {/* Absolute positioning */}
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center"> {/* Aligning content at the center */}
                
                    <img src={item.image} alt={item.alt} className="mb-4 mx-auto h-[300px] rounded-[10px]" /> {/* Dynamic image source */}
                    <p className="text-lg font-semibold text-white">{item.name}</p> {/* Dynamic team member name */}
                  </CardContent>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>

    </div>
  )
}
