ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)


ESX.RegisterServerCallback("wkhudid:set", function(source, cb)
    local source = source
    local xPlayer = ESX.GetPlayerFromId(source)

    local data = {
        id = source,
    }

    cb(data)
end)