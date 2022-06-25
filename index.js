// import {addEventUsingSelector,setStyleUsingSelector,hideUsingSelector } from './node_modules/petite-design2';

setStyleUsingSelector('.img',
{
    shadow_type: 'soft',
    padding: true,
    margin: true,
    backgroundColor:'#eee'
}
)


hideUsingSelector('#hide');

addEventUsingSelector('.img','click',function(){
    console.log("say hi from class 'img'")
})