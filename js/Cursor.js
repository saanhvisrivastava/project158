AFRAME.registerComponent('cursor-listener',{
    schema:{
        selectedItemId:{default:'',type:'string'}
    },
    
    init:function(){
    this.handleMouseEnterEvents()
    this.handleMouseLeaveEvent()
    
    },
    
    handlePoster:function(){
    const id=this.el.getAttribute('id')
    const posterId=[
        'captain-america',
        'iron-man',
        'aquaman',
        'wonder-woman'
    ]
    if(posterId.includes(id)){
    const placeContainer=document.querySelector('#places-container')
    placeContainer.setAttribute('cursor-listener',{
        selectedItemId:id
    })
    this.el.setAttribute('material',{
        color:'#d76b30',
        opacity:1
    })
    }
    },
    
    handleMouseEnterEvents:function(){
        this.el.addEventListener('mouseenter',()=>{this.handlePoster()})
    },
    
    handleMouseLeaveEvent:function(){
        this.el.addEventListener('mouseleave',()=>{
            const {selectedItemId}=this.data
            if(selectedItemId){
                const el=document.querySelector(`#${selectedItemId}`)
                const id=el.getAttribute('id')
                if(id==selectedItemId){
                el.setAttribute('material',{
                    color:'#0077cc',
                    opacity:1
                })
                }
    
            }
        })
    }
})