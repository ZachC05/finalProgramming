var JellybeansOwned = 0;
var jellybeanPower = 1;
var costToUpgradePower = 50;
var autoClickseconds = 2000;
var autoEnabled = false;
var costtoupgradeAuto = 100;
var autoClickPower = 0;
var winJellebeansNeeded = 9999;
var rebirthPower = 1;

function Click(){
    JellybeansOwned = (JellybeansOwned + jellybeanPower) * rebirthPower;
    document.getElementById("AmountOfJellybeans").innerHTML = JellybeansOwned
}

function Upgradeclick(){
if(JellybeansOwned >= costToUpgradePower){
    JellybeansOwned = JellybeansOwned - costToUpgradePower;
    jellybeanPower++;
    costToUpgradePower = costToUpgradePower + (Math.round(costToUpgradePower * 0.5))
    document.getElementById("AmountOfJellybeans").innerHTML = JellybeansOwned;
    document.getElementById("upgradeCost").innerHTML = "Cost to Upgrade Jellybean Power:" + costToUpgradePower;
    document.getElementById("JellyPWR").innerHTML = "Current Jellybean Power :" + jellybeanPower;
}
}

function UpgradeAuto(){
    if(JellybeansOwned >= costtoupgradeAuto && autoClickPower != 5){
        JellybeansOwned = JellybeansOwned - costtoupgradeAuto;
        costtoupgradeAuto = costtoupgradeAuto + (Math.round(costtoupgradeAuto * 0.5))
        autoClickPower++;

        if(autoEnabled = true){
           autoClickseconds = autoClickseconds - 250;
        }
        
        document.getElementById("AmountOfJellybeans").innerHTML = JellybeansOwned
        document.getElementById("AutoClick").innerHTML = "Current AutoClick Power:" + autoClickPower +  "Cost to Upgrade:" + costtoupgradeAuto + "Auto Clicker Active";

        if(autoEnabled == false) return
        alert("Started")
        autoEnabled = true
        autoClick()

    }
}

function autoClick(){
    
    JellybeansOwned = JellybeansOwned + jellybeanPower;
    
    document.getElementById("AmountOfJellybeans").innerHTML = JellybeansOwned
    
    
    
    if(autoEnabled == true){
        setTimeout(autoClick, autoClickseconds);
    }
        
    
}

function rebirth(){
    if(JellybeansOwned >= winJellebeansNeeded){
        JellybeansOwned = 0;
        jellybeanPower = 1;
        costToUpgradePower = 50;
        autoClickseconds = 2000;
        autoEnabled = false;
        costtoupgradeAuto = 100;
        autoClickPower = 0;
        winJellebeansNeeded =  (Math.round(winJellebeansNeeded * 1.5));
        rebirthPower++;
        
        

        //resetting the game from here
        document.getElementById("AmountOfJellybeans").innerHTML = JellybeansOwned;
        document.getElementById("upgradeCost").innerHTML = "Cost to Upgrade Jellybean Power:" + costToUpgradePower;
        document.getElementById("JellyPWR").innerHTML = "Current Jellybean Power :" + jellybeanPower;
        document.getElementById("Rebirth").innerHTML = "you need " + winJellebeansNeeded + " to rebirth";
        document.getElementById("AutoClick").innerHTML = "Current AutoClick Power:" + autoClickPower +  "Cost to Upgrade:" + costtoupgradeAuto + " Auto Clicker Inactive";
        document.getElementById("rebirthPower").innerHTML = "Current Rebirth Power is" + rebirthPower--;

    }
}