const form = document.querySelector('form')
// this usecase will give you empty value
// const hgt = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault()

  const hgt = parseInt(document.querySelector('#height').value);
  const wgt = parseInt(document.querySelector('#weight').value);
  const results = (document.querySelector('#results'));

  if(hgt === '' || hgt<0 || isNaN(hgt)){
    results.innerHTML =`Please enter a valid height ${hgt}`;
  }else if(wgt === '' || wgt<0 || isNaN(wgt)){
    results.innerHTML =`Please enter a valid weight ${wgt}`;
  }else{
    const bmi = (wgt/ ((hgt*hgt)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if(bmi<18.6){
      results.innerHTML=`<span>Under weigth :${bmi}</span>`;
      }else if(bmi>18.6 && bmi<24.9){
          results.textContent=`Normal Weight:${bmi}`;
      }else{
          results.textContent=`Over Weight : ${bmi}`
      }
  }
})