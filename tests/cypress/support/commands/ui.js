import loginPage from '../pages/Login'
import mapPage from '../pages/Map'

Cypress.Commands.add('uiLogin', (user)=> {
    loginPage.go(-23.65730018889836,-47.123408317565925)
    loginPage.form(user)
    loginPage.submit()
    mapPage.loggedUser(user.name)
})

Cypress.Commands.add('setGeolocation', (lat, lng)=>{
    localStorage.setItem('qtruck:latitude', lat)
    localStorage.setItem('qtruck:longitude', lng)
})