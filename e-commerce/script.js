var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start: "0% 95%",
    end:"70% 50%",
    scrub:true,
   markers: true,
}})

tl.to("#fanta",{
    top: "135%",
    left: "7%"
}, 'orange')
tl.to("#orange",{
    top: "160%",
    left: "20%",
}, 'orange')
tl.to("#orange4",{
    width: "10%",
    top: "170%",
    right: "10%",
}, 'orange')
tl.to("#leaf1",{
    top: "110%",
    rotate: "90deg",
    left: "80%",
}, 'orange')
tl.to("#leaf2",{
    top: "110%",
    rotate: "130deg",
    left: "0%",
}, 'orange')

var tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start: "0% 95%",
    end:"70% 50%",
    scrub:true,
    markers: true,
}})
tl2.to("#orange",{
    left: "45%",
    top: "207%",
}, 'ca')
tl2.to("#fanta",{
    left: "43%",
    top: "218%",
}, 'ca')