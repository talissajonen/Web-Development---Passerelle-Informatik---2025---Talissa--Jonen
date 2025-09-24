this.onload = ()=>{
    const anchor = document.querySelector('a');
      anchor.href = 'https://www.merriam-webster.com/dictionary/dysfunctional';
       anchor.setAttribute('target','_blank');
         anchor.setAttribute('pokemon','pikachu');
             const classes = anchor.classList; 
     console.log(classes);
     classes.add('highlighted');
     console.log(classes);

    let className = anchor.className; 
    console.log(className);
     className += ' info';
     console.log(className);
     anchor.className = className;
}
