const waitForSomething = (ms) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) {
    now = Date.now();
  }
};

export default function AnotherSlowComponent({children}) { 
    waitForSomething(1000); 
  return <div> 
  Hello {children}
  </div>
}