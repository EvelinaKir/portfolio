
export const getRotateConfig = (transformOrigin:string, margin:string, rotation:number, delay?: string) =>  {
    return {
      rotation:rotation, 
      transformOrigin:transformOrigin, 
      marginRight: margin,
      delay: delay
    }
    }


  
