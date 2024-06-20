/** A list of 1000 .beat times as precalculated intervals. Each entry in the
 * list is a tuple containing start and end values in milliseconds. */
export const BEAT_INTERVALS = [
  [ 0, 86400 ],
  [ 86400, 172800 ],
  [ 172800, 259200 ],
  [ 259200, 345600 ],
  [ 345600, 432000 ],
  [ 432000, 518400 ],
  [ 518400, 604800 ],
  [ 604800, 691200 ],
  [ 691200, 777600 ],
  [ 777600, 864000 ],
  [ 864000, 950400 ],
  [ 950400, 1036800 ],
  [ 1036800, 1123200 ],
  [ 1123200, 1209600 ],
  [ 1209600, 1296000 ],
  [ 1296000, 1382400 ],
  [ 1382400, 1468800 ],
  [ 1468800, 1555200 ],
  [ 1555200, 1641600 ],
  [ 1641600, 1728000 ],
  [ 1728000, 1814400 ],
  [ 1814400, 1900800 ],
  [ 1900800, 1987200 ],
  [ 1987200, 2073600 ],
  [ 2073600, 2160000 ],
  [ 2160000, 2246400 ],
  [ 2246400, 2332800 ],
  [ 2332800, 2419200 ],
  [ 2419200, 2505600 ],
  [ 2505600, 2592000 ],
  [ 2592000, 2678400 ],
  [ 2678400, 2764800 ],
  [ 2764800, 2851200 ],
  [ 2851200, 2937600 ],
  [ 2937600, 3024000 ],
  [ 3024000, 3110400 ],
  [ 3110400, 3196800 ],
  [ 3196800, 3283200 ],
  [ 3283200, 3369600 ],
  [ 3369600, 3456000 ],
  [ 3456000, 3542400 ],
  [ 3542400, 3628800 ],
  [ 3628800, 3715200 ],
  [ 3715200, 3801600 ],
  [ 3801600, 3888000 ],
  [ 3888000, 3974400 ],
  [ 3974400, 4060800 ],
  [ 4060800, 4147200 ],
  [ 4147200, 4233600 ],
  [ 4233600, 4320000 ],
  [ 4320000, 4406400 ],
  [ 4406400, 4492800 ],
  [ 4492800, 4579200 ],
  [ 4579200, 4665600 ],
  [ 4665600, 4752000 ],
  [ 4752000, 4838400 ],
  [ 4838400, 4924800 ],
  [ 4924800, 5011200 ],
  [ 5011200, 5097600 ],
  [ 5097600, 5184000 ],
  [ 5184000, 5270400 ],
  [ 5270400, 5356800 ],
  [ 5356800, 5443200 ],
  [ 5443200, 5529600 ],
  [ 5529600, 5616000 ],
  [ 5616000, 5702400 ],
  [ 5702400, 5788800 ],
  [ 5788800, 5875200 ],
  [ 5875200, 5961600 ],
  [ 5961600, 6048000 ],
  [ 6048000, 6134400 ],
  [ 6134400, 6220800 ],
  [ 6220800, 6307200 ],
  [ 6307200, 6393600 ],
  [ 6393600, 6480000 ],
  [ 6480000, 6566400 ],
  [ 6566400, 6652800 ],
  [ 6652800, 6739200 ],
  [ 6739200, 6825600 ],
  [ 6825600, 6912000 ],
  [ 6912000, 6998400 ],
  [ 6998400, 7084800 ],
  [ 7084800, 7171200 ],
  [ 7171200, 7257600 ],
  [ 7257600, 7344000 ],
  [ 7344000, 7430400 ],
  [ 7430400, 7516800 ],
  [ 7516800, 7603200 ],
  [ 7603200, 7689600 ],
  [ 7689600, 7776000 ],
  [ 7776000, 7862400 ],
  [ 7862400, 7948800 ],
  [ 7948800, 8035200 ],
  [ 8035200, 8121600 ],
  [ 8121600, 8208000 ],
  [ 8208000, 8294400 ],
  [ 8294400, 8380800 ],
  [ 8380800, 8467200 ],
  [ 8467200, 8553600 ],
  [ 8553600, 8640000 ],
  [ 8640000, 8726400 ],
  [ 8726400, 8812800 ],
  [ 8812800, 8899200 ],
  [ 8899200, 8985600 ],
  [ 8985600, 9072000 ],
  [ 9072000, 9158400 ],
  [ 9158400, 9244800 ],
  [ 9244800, 9331200 ],
  [ 9331200, 9417600 ],
  [ 9417600, 9504000 ],
  [ 9504000, 9590400 ],
  [ 9590400, 9676800 ],
  [ 9676800, 9763200 ],
  [ 9763200, 9849600 ],
  [ 9849600, 9936000 ],
  [ 9936000, 10022400 ],
  [ 10022400, 10108800 ],
  [ 10108800, 10195200 ],
  [ 10195200, 10281600 ],
  [ 10281600, 10368000 ],
  [ 10368000, 10454400 ],
  [ 10454400, 10540800 ],
  [ 10540800, 10627200 ],
  [ 10627200, 10713600 ],
  [ 10713600, 10800000 ],
  [ 10800000, 10886400 ],
  [ 10886400, 10972800 ],
  [ 10972800, 11059200 ],
  [ 11059200, 11145600 ],
  [ 11145600, 11232000 ],
  [ 11232000, 11318400 ],
  [ 11318400, 11404800 ],
  [ 11404800, 11491200 ],
  [ 11491200, 11577600 ],
  [ 11577600, 11664000 ],
  [ 11664000, 11750400 ],
  [ 11750400, 11836800 ],
  [ 11836800, 11923200 ],
  [ 11923200, 12009600 ],
  [ 12009600, 12096000 ],
  [ 12096000, 12182400 ],
  [ 12182400, 12268800 ],
  [ 12268800, 12355200 ],
  [ 12355200, 12441600 ],
  [ 12441600, 12528000 ],
  [ 12528000, 12614400 ],
  [ 12614400, 12700800 ],
  [ 12700800, 12787200 ],
  [ 12787200, 12873600 ],
  [ 12873600, 12960000 ],
  [ 12960000, 13046400 ],
  [ 13046400, 13132800 ],
  [ 13132800, 13219200 ],
  [ 13219200, 13305600 ],
  [ 13305600, 13392000 ],
  [ 13392000, 13478400 ],
  [ 13478400, 13564800 ],
  [ 13564800, 13651200 ],
  [ 13651200, 13737600 ],
  [ 13737600, 13824000 ],
  [ 13824000, 13910400 ],
  [ 13910400, 13996800 ],
  [ 13996800, 14083200 ],
  [ 14083200, 14169600 ],
  [ 14169600, 14256000 ],
  [ 14256000, 14342400 ],
  [ 14342400, 14428800 ],
  [ 14428800, 14515200 ],
  [ 14515200, 14601600 ],
  [ 14601600, 14688000 ],
  [ 14688000, 14774400 ],
  [ 14774400, 14860800 ],
  [ 14860800, 14947200 ],
  [ 14947200, 15033600 ],
  [ 15033600, 15120000 ],
  [ 15120000, 15206400 ],
  [ 15206400, 15292800 ],
  [ 15292800, 15379200 ],
  [ 15379200, 15465600 ],
  [ 15465600, 15552000 ],
  [ 15552000, 15638400 ],
  [ 15638400, 15724800 ],
  [ 15724800, 15811200 ],
  [ 15811200, 15897600 ],
  [ 15897600, 15984000 ],
  [ 15984000, 16070400 ],
  [ 16070400, 16156800 ],
  [ 16156800, 16243200 ],
  [ 16243200, 16329600 ],
  [ 16329600, 16416000 ],
  [ 16416000, 16502400 ],
  [ 16502400, 16588800 ],
  [ 16588800, 16675200 ],
  [ 16675200, 16761600 ],
  [ 16761600, 16848000 ],
  [ 16848000, 16934400 ],
  [ 16934400, 17020800 ],
  [ 17020800, 17107200 ],
  [ 17107200, 17193600 ],
  [ 17193600, 17280000 ],
  [ 17280000, 17366400 ],
  [ 17366400, 17452800 ],
  [ 17452800, 17539200 ],
  [ 17539200, 17625600 ],
  [ 17625600, 17712000 ],
  [ 17712000, 17798400 ],
  [ 17798400, 17884800 ],
  [ 17884800, 17971200 ],
  [ 17971200, 18057600 ],
  [ 18057600, 18144000 ],
  [ 18144000, 18230400 ],
  [ 18230400, 18316800 ],
  [ 18316800, 18403200 ],
  [ 18403200, 18489600 ],
  [ 18489600, 18576000 ],
  [ 18576000, 18662400 ],
  [ 18662400, 18748800 ],
  [ 18748800, 18835200 ],
  [ 18835200, 18921600 ],
  [ 18921600, 19008000 ],
  [ 19008000, 19094400 ],
  [ 19094400, 19180800 ],
  [ 19180800, 19267200 ],
  [ 19267200, 19353600 ],
  [ 19353600, 19440000 ],
  [ 19440000, 19526400 ],
  [ 19526400, 19612800 ],
  [ 19612800, 19699200 ],
  [ 19699200, 19785600 ],
  [ 19785600, 19872000 ],
  [ 19872000, 19958400 ],
  [ 19958400, 20044800 ],
  [ 20044800, 20131200 ],
  [ 20131200, 20217600 ],
  [ 20217600, 20304000 ],
  [ 20304000, 20390400 ],
  [ 20390400, 20476800 ],
  [ 20476800, 20563200 ],
  [ 20563200, 20649600 ],
  [ 20649600, 20736000 ],
  [ 20736000, 20822400 ],
  [ 20822400, 20908800 ],
  [ 20908800, 20995200 ],
  [ 20995200, 21081600 ],
  [ 21081600, 21168000 ],
  [ 21168000, 21254400 ],
  [ 21254400, 21340800 ],
  [ 21340800, 21427200 ],
  [ 21427200, 21513600 ],
  [ 21513600, 21600000 ],
  [ 21600000, 21686400 ],
  [ 21686400, 21772800 ],
  [ 21772800, 21859200 ],
  [ 21859200, 21945600 ],
  [ 21945600, 22032000 ],
  [ 22032000, 22118400 ],
  [ 22118400, 22204800 ],
  [ 22204800, 22291200 ],
  [ 22291200, 22377600 ],
  [ 22377600, 22464000 ],
  [ 22464000, 22550400 ],
  [ 22550400, 22636800 ],
  [ 22636800, 22723200 ],
  [ 22723200, 22809600 ],
  [ 22809600, 22896000 ],
  [ 22896000, 22982400 ],
  [ 22982400, 23068800 ],
  [ 23068800, 23155200 ],
  [ 23155200, 23241600 ],
  [ 23241600, 23328000 ],
  [ 23328000, 23414400 ],
  [ 23414400, 23500800 ],
  [ 23500800, 23587200 ],
  [ 23587200, 23673600 ],
  [ 23673600, 23760000 ],
  [ 23760000, 23846400 ],
  [ 23846400, 23932800 ],
  [ 23932800, 24019200 ],
  [ 24019200, 24105600 ],
  [ 24105600, 24192000 ],
  [ 24192000, 24278400 ],
  [ 24278400, 24364800 ],
  [ 24364800, 24451200 ],
  [ 24451200, 24537600 ],
  [ 24537600, 24624000 ],
  [ 24624000, 24710400 ],
  [ 24710400, 24796800 ],
  [ 24796800, 24883200 ],
  [ 24883200, 24969600 ],
  [ 24969600, 25056000 ],
  [ 25056000, 25142400 ],
  [ 25142400, 25228800 ],
  [ 25228800, 25315200 ],
  [ 25315200, 25401600 ],
  [ 25401600, 25488000 ],
  [ 25488000, 25574400 ],
  [ 25574400, 25660800 ],
  [ 25660800, 25747200 ],
  [ 25747200, 25833600 ],
  [ 25833600, 25920000 ],
  [ 25920000, 26006400 ],
  [ 26006400, 26092800 ],
  [ 26092800, 26179200 ],
  [ 26179200, 26265600 ],
  [ 26265600, 26352000 ],
  [ 26352000, 26438400 ],
  [ 26438400, 26524800 ],
  [ 26524800, 26611200 ],
  [ 26611200, 26697600 ],
  [ 26697600, 26784000 ],
  [ 26784000, 26870400 ],
  [ 26870400, 26956800 ],
  [ 26956800, 27043200 ],
  [ 27043200, 27129600 ],
  [ 27129600, 27216000 ],
  [ 27216000, 27302400 ],
  [ 27302400, 27388800 ],
  [ 27388800, 27475200 ],
  [ 27475200, 27561600 ],
  [ 27561600, 27648000 ],
  [ 27648000, 27734400 ],
  [ 27734400, 27820800 ],
  [ 27820800, 27907200 ],
  [ 27907200, 27993600 ],
  [ 27993600, 28080000 ],
  [ 28080000, 28166400 ],
  [ 28166400, 28252800 ],
  [ 28252800, 28339200 ],
  [ 28339200, 28425600 ],
  [ 28425600, 28512000 ],
  [ 28512000, 28598400 ],
  [ 28598400, 28684800 ],
  [ 28684800, 28771200 ],
  [ 28771200, 28857600 ],
  [ 28857600, 28944000 ],
  [ 28944000, 29030400 ],
  [ 29030400, 29116800 ],
  [ 29116800, 29203200 ],
  [ 29203200, 29289600 ],
  [ 29289600, 29376000 ],
  [ 29376000, 29462400 ],
  [ 29462400, 29548800 ],
  [ 29548800, 29635200 ],
  [ 29635200, 29721600 ],
  [ 29721600, 29808000 ],
  [ 29808000, 29894400 ],
  [ 29894400, 29980800 ],
  [ 29980800, 30067200 ],
  [ 30067200, 30153600 ],
  [ 30153600, 30240000 ],
  [ 30240000, 30326400 ],
  [ 30326400, 30412800 ],
  [ 30412800, 30499200 ],
  [ 30499200, 30585600 ],
  [ 30585600, 30672000 ],
  [ 30672000, 30758400 ],
  [ 30758400, 30844800 ],
  [ 30844800, 30931200 ],
  [ 30931200, 31017600 ],
  [ 31017600, 31104000 ],
  [ 31104000, 31190400 ],
  [ 31190400, 31276800 ],
  [ 31276800, 31363200 ],
  [ 31363200, 31449600 ],
  [ 31449600, 31536000 ],
  [ 31536000, 31622400 ],
  [ 31622400, 31708800 ],
  [ 31708800, 31795200 ],
  [ 31795200, 31881600 ],
  [ 31881600, 31968000 ],
  [ 31968000, 32054400 ],
  [ 32054400, 32140800 ],
  [ 32140800, 32227200 ],
  [ 32227200, 32313600 ],
  [ 32313600, 32400000 ],
  [ 32400000, 32486400 ],
  [ 32486400, 32572800 ],
  [ 32572800, 32659200 ],
  [ 32659200, 32745600 ],
  [ 32745600, 32832000 ],
  [ 32832000, 32918400 ],
  [ 32918400, 33004800 ],
  [ 33004800, 33091200 ],
  [ 33091200, 33177600 ],
  [ 33177600, 33264000 ],
  [ 33264000, 33350400 ],
  [ 33350400, 33436800 ],
  [ 33436800, 33523200 ],
  [ 33523200, 33609600 ],
  [ 33609600, 33696000 ],
  [ 33696000, 33782400 ],
  [ 33782400, 33868800 ],
  [ 33868800, 33955200 ],
  [ 33955200, 34041600 ],
  [ 34041600, 34128000 ],
  [ 34128000, 34214400 ],
  [ 34214400, 34300800 ],
  [ 34300800, 34387200 ],
  [ 34387200, 34473600 ],
  [ 34473600, 34560000 ],
  [ 34560000, 34646400 ],
  [ 34646400, 34732800 ],
  [ 34732800, 34819200 ],
  [ 34819200, 34905600 ],
  [ 34905600, 34992000 ],
  [ 34992000, 35078400 ],
  [ 35078400, 35164800 ],
  [ 35164800, 35251200 ],
  [ 35251200, 35337600 ],
  [ 35337600, 35424000 ],
  [ 35424000, 35510400 ],
  [ 35510400, 35596800 ],
  [ 35596800, 35683200 ],
  [ 35683200, 35769600 ],
  [ 35769600, 35856000 ],
  [ 35856000, 35942400 ],
  [ 35942400, 36028800 ],
  [ 36028800, 36115200 ],
  [ 36115200, 36201600 ],
  [ 36201600, 36288000 ],
  [ 36288000, 36374400 ],
  [ 36374400, 36460800 ],
  [ 36460800, 36547200 ],
  [ 36547200, 36633600 ],
  [ 36633600, 36720000 ],
  [ 36720000, 36806400 ],
  [ 36806400, 36892800 ],
  [ 36892800, 36979200 ],
  [ 36979200, 37065600 ],
  [ 37065600, 37152000 ],
  [ 37152000, 37238400 ],
  [ 37238400, 37324800 ],
  [ 37324800, 37411200 ],
  [ 37411200, 37497600 ],
  [ 37497600, 37584000 ],
  [ 37584000, 37670400 ],
  [ 37670400, 37756800 ],
  [ 37756800, 37843200 ],
  [ 37843200, 37929600 ],
  [ 37929600, 38016000 ],
  [ 38016000, 38102400 ],
  [ 38102400, 38188800 ],
  [ 38188800, 38275200 ],
  [ 38275200, 38361600 ],
  [ 38361600, 38448000 ],
  [ 38448000, 38534400 ],
  [ 38534400, 38620800 ],
  [ 38620800, 38707200 ],
  [ 38707200, 38793600 ],
  [ 38793600, 38880000 ],
  [ 38880000, 38966400 ],
  [ 38966400, 39052800 ],
  [ 39052800, 39139200 ],
  [ 39139200, 39225600 ],
  [ 39225600, 39312000 ],
  [ 39312000, 39398400 ],
  [ 39398400, 39484800 ],
  [ 39484800, 39571200 ],
  [ 39571200, 39657600 ],
  [ 39657600, 39744000 ],
  [ 39744000, 39830400 ],
  [ 39830400, 39916800 ],
  [ 39916800, 40003200 ],
  [ 40003200, 40089600 ],
  [ 40089600, 40176000 ],
  [ 40176000, 40262400 ],
  [ 40262400, 40348800 ],
  [ 40348800, 40435200 ],
  [ 40435200, 40521600 ],
  [ 40521600, 40608000 ],
  [ 40608000, 40694400 ],
  [ 40694400, 40780800 ],
  [ 40780800, 40867200 ],
  [ 40867200, 40953600 ],
  [ 40953600, 41040000 ],
  [ 41040000, 41126400 ],
  [ 41126400, 41212800 ],
  [ 41212800, 41299200 ],
  [ 41299200, 41385600 ],
  [ 41385600, 41472000 ],
  [ 41472000, 41558400 ],
  [ 41558400, 41644800 ],
  [ 41644800, 41731200 ],
  [ 41731200, 41817600 ],
  [ 41817600, 41904000 ],
  [ 41904000, 41990400 ],
  [ 41990400, 42076800 ],
  [ 42076800, 42163200 ],
  [ 42163200, 42249600 ],
  [ 42249600, 42336000 ],
  [ 42336000, 42422400 ],
  [ 42422400, 42508800 ],
  [ 42508800, 42595200 ],
  [ 42595200, 42681600 ],
  [ 42681600, 42768000 ],
  [ 42768000, 42854400 ],
  [ 42854400, 42940800 ],
  [ 42940800, 43027200 ],
  [ 43027200, 43113600 ],
  [ 43113600, 43200000 ],
  [ 43200000, 43286400 ],
  [ 43286400, 43372800 ],
  [ 43372800, 43459200 ],
  [ 43459200, 43545600 ],
  [ 43545600, 43632000 ],
  [ 43632000, 43718400 ],
  [ 43718400, 43804800 ],
  [ 43804800, 43891200 ],
  [ 43891200, 43977600 ],
  [ 43977600, 44064000 ],
  [ 44064000, 44150400 ],
  [ 44150400, 44236800 ],
  [ 44236800, 44323200 ],
  [ 44323200, 44409600 ],
  [ 44409600, 44496000 ],
  [ 44496000, 44582400 ],
  [ 44582400, 44668800 ],
  [ 44668800, 44755200 ],
  [ 44755200, 44841600 ],
  [ 44841600, 44928000 ],
  [ 44928000, 45014400 ],
  [ 45014400, 45100800 ],
  [ 45100800, 45187200 ],
  [ 45187200, 45273600 ],
  [ 45273600, 45360000 ],
  [ 45360000, 45446400 ],
  [ 45446400, 45532800 ],
  [ 45532800, 45619200 ],
  [ 45619200, 45705600 ],
  [ 45705600, 45792000 ],
  [ 45792000, 45878400 ],
  [ 45878400, 45964800 ],
  [ 45964800, 46051200 ],
  [ 46051200, 46137600 ],
  [ 46137600, 46224000 ],
  [ 46224000, 46310400 ],
  [ 46310400, 46396800 ],
  [ 46396800, 46483200 ],
  [ 46483200, 46569600 ],
  [ 46569600, 46656000 ],
  [ 46656000, 46742400 ],
  [ 46742400, 46828800 ],
  [ 46828800, 46915200 ],
  [ 46915200, 47001600 ],
  [ 47001600, 47088000 ],
  [ 47088000, 47174400 ],
  [ 47174400, 47260800 ],
  [ 47260800, 47347200 ],
  [ 47347200, 47433600 ],
  [ 47433600, 47520000 ],
  [ 47520000, 47606400 ],
  [ 47606400, 47692800 ],
  [ 47692800, 47779200 ],
  [ 47779200, 47865600 ],
  [ 47865600, 47952000 ],
  [ 47952000, 48038400 ],
  [ 48038400, 48124800 ],
  [ 48124800, 48211200 ],
  [ 48211200, 48297600 ],
  [ 48297600, 48384000 ],
  [ 48384000, 48470400 ],
  [ 48470400, 48556800 ],
  [ 48556800, 48643200 ],
  [ 48643200, 48729600 ],
  [ 48729600, 48816000 ],
  [ 48816000, 48902400 ],
  [ 48902400, 48988800 ],
  [ 48988800, 49075200 ],
  [ 49075200, 49161600 ],
  [ 49161600, 49248000 ],
  [ 49248000, 49334400 ],
  [ 49334400, 49420800 ],
  [ 49420800, 49507200 ],
  [ 49507200, 49593600 ],
  [ 49593600, 49680000 ],
  [ 49680000, 49766400 ],
  [ 49766400, 49852800 ],
  [ 49852800, 49939200 ],
  [ 49939200, 50025600 ],
  [ 50025600, 50112000 ],
  [ 50112000, 50198400 ],
  [ 50198400, 50284800 ],
  [ 50284800, 50371200 ],
  [ 50371200, 50457600 ],
  [ 50457600, 50544000 ],
  [ 50544000, 50630400 ],
  [ 50630400, 50716800 ],
  [ 50716800, 50803200 ],
  [ 50803200, 50889600 ],
  [ 50889600, 50976000 ],
  [ 50976000, 51062400 ],
  [ 51062400, 51148800 ],
  [ 51148800, 51235200 ],
  [ 51235200, 51321600 ],
  [ 51321600, 51408000 ],
  [ 51408000, 51494400 ],
  [ 51494400, 51580800 ],
  [ 51580800, 51667200 ],
  [ 51667200, 51753600 ],
  [ 51753600, 51840000 ],
  [ 51840000, 51926400 ],
  [ 51926400, 52012800 ],
  [ 52012800, 52099200 ],
  [ 52099200, 52185600 ],
  [ 52185600, 52272000 ],
  [ 52272000, 52358400 ],
  [ 52358400, 52444800 ],
  [ 52444800, 52531200 ],
  [ 52531200, 52617600 ],
  [ 52617600, 52704000 ],
  [ 52704000, 52790400 ],
  [ 52790400, 52876800 ],
  [ 52876800, 52963200 ],
  [ 52963200, 53049600 ],
  [ 53049600, 53136000 ],
  [ 53136000, 53222400 ],
  [ 53222400, 53308800 ],
  [ 53308800, 53395200 ],
  [ 53395200, 53481600 ],
  [ 53481600, 53568000 ],
  [ 53568000, 53654400 ],
  [ 53654400, 53740800 ],
  [ 53740800, 53827200 ],
  [ 53827200, 53913600 ],
  [ 53913600, 54000000 ],
  [ 54000000, 54086400 ],
  [ 54086400, 54172800 ],
  [ 54172800, 54259200 ],
  [ 54259200, 54345600 ],
  [ 54345600, 54432000 ],
  [ 54432000, 54518400 ],
  [ 54518400, 54604800 ],
  [ 54604800, 54691200 ],
  [ 54691200, 54777600 ],
  [ 54777600, 54864000 ],
  [ 54864000, 54950400 ],
  [ 54950400, 55036800 ],
  [ 55036800, 55123200 ],
  [ 55123200, 55209600 ],
  [ 55209600, 55296000 ],
  [ 55296000, 55382400 ],
  [ 55382400, 55468800 ],
  [ 55468800, 55555200 ],
  [ 55555200, 55641600 ],
  [ 55641600, 55728000 ],
  [ 55728000, 55814400 ],
  [ 55814400, 55900800 ],
  [ 55900800, 55987200 ],
  [ 55987200, 56073600 ],
  [ 56073600, 56160000 ],
  [ 56160000, 56246400 ],
  [ 56246400, 56332800 ],
  [ 56332800, 56419200 ],
  [ 56419200, 56505600 ],
  [ 56505600, 56592000 ],
  [ 56592000, 56678400 ],
  [ 56678400, 56764800 ],
  [ 56764800, 56851200 ],
  [ 56851200, 56937600 ],
  [ 56937600, 57024000 ],
  [ 57024000, 57110400 ],
  [ 57110400, 57196800 ],
  [ 57196800, 57283200 ],
  [ 57283200, 57369600 ],
  [ 57369600, 57456000 ],
  [ 57456000, 57542400 ],
  [ 57542400, 57628800 ],
  [ 57628800, 57715200 ],
  [ 57715200, 57801600 ],
  [ 57801600, 57888000 ],
  [ 57888000, 57974400 ],
  [ 57974400, 58060800 ],
  [ 58060800, 58147200 ],
  [ 58147200, 58233600 ],
  [ 58233600, 58320000 ],
  [ 58320000, 58406400 ],
  [ 58406400, 58492800 ],
  [ 58492800, 58579200 ],
  [ 58579200, 58665600 ],
  [ 58665600, 58752000 ],
  [ 58752000, 58838400 ],
  [ 58838400, 58924800 ],
  [ 58924800, 59011200 ],
  [ 59011200, 59097600 ],
  [ 59097600, 59184000 ],
  [ 59184000, 59270400 ],
  [ 59270400, 59356800 ],
  [ 59356800, 59443200 ],
  [ 59443200, 59529600 ],
  [ 59529600, 59616000 ],
  [ 59616000, 59702400 ],
  [ 59702400, 59788800 ],
  [ 59788800, 59875200 ],
  [ 59875200, 59961600 ],
  [ 59961600, 60048000 ],
  [ 60048000, 60134400 ],
  [ 60134400, 60220800 ],
  [ 60220800, 60307200 ],
  [ 60307200, 60393600 ],
  [ 60393600, 60480000 ],
  [ 60480000, 60566400 ],
  [ 60566400, 60652800 ],
  [ 60652800, 60739200 ],
  [ 60739200, 60825600 ],
  [ 60825600, 60912000 ],
  [ 60912000, 60998400 ],
  [ 60998400, 61084800 ],
  [ 61084800, 61171200 ],
  [ 61171200, 61257600 ],
  [ 61257600, 61344000 ],
  [ 61344000, 61430400 ],
  [ 61430400, 61516800 ],
  [ 61516800, 61603200 ],
  [ 61603200, 61689600 ],
  [ 61689600, 61776000 ],
  [ 61776000, 61862400 ],
  [ 61862400, 61948800 ],
  [ 61948800, 62035200 ],
  [ 62035200, 62121600 ],
  [ 62121600, 62208000 ],
  [ 62208000, 62294400 ],
  [ 62294400, 62380800 ],
  [ 62380800, 62467200 ],
  [ 62467200, 62553600 ],
  [ 62553600, 62640000 ],
  [ 62640000, 62726400 ],
  [ 62726400, 62812800 ],
  [ 62812800, 62899200 ],
  [ 62899200, 62985600 ],
  [ 62985600, 63072000 ],
  [ 63072000, 63158400 ],
  [ 63158400, 63244800 ],
  [ 63244800, 63331200 ],
  [ 63331200, 63417600 ],
  [ 63417600, 63504000 ],
  [ 63504000, 63590400 ],
  [ 63590400, 63676800 ],
  [ 63676800, 63763200 ],
  [ 63763200, 63849600 ],
  [ 63849600, 63936000 ],
  [ 63936000, 64022400 ],
  [ 64022400, 64108800 ],
  [ 64108800, 64195200 ],
  [ 64195200, 64281600 ],
  [ 64281600, 64368000 ],
  [ 64368000, 64454400 ],
  [ 64454400, 64540800 ],
  [ 64540800, 64627200 ],
  [ 64627200, 64713600 ],
  [ 64713600, 64800000 ],
  [ 64800000, 64886400 ],
  [ 64886400, 64972800 ],
  [ 64972800, 65059200 ],
  [ 65059200, 65145600 ],
  [ 65145600, 65232000 ],
  [ 65232000, 65318400 ],
  [ 65318400, 65404800 ],
  [ 65404800, 65491200 ],
  [ 65491200, 65577600 ],
  [ 65577600, 65664000 ],
  [ 65664000, 65750400 ],
  [ 65750400, 65836800 ],
  [ 65836800, 65923200 ],
  [ 65923200, 66009600 ],
  [ 66009600, 66096000 ],
  [ 66096000, 66182400 ],
  [ 66182400, 66268800 ],
  [ 66268800, 66355200 ],
  [ 66355200, 66441600 ],
  [ 66441600, 66528000 ],
  [ 66528000, 66614400 ],
  [ 66614400, 66700800 ],
  [ 66700800, 66787200 ],
  [ 66787200, 66873600 ],
  [ 66873600, 66960000 ],
  [ 66960000, 67046400 ],
  [ 67046400, 67132800 ],
  [ 67132800, 67219200 ],
  [ 67219200, 67305600 ],
  [ 67305600, 67392000 ],
  [ 67392000, 67478400 ],
  [ 67478400, 67564800 ],
  [ 67564800, 67651200 ],
  [ 67651200, 67737600 ],
  [ 67737600, 67824000 ],
  [ 67824000, 67910400 ],
  [ 67910400, 67996800 ],
  [ 67996800, 68083200 ],
  [ 68083200, 68169600 ],
  [ 68169600, 68256000 ],
  [ 68256000, 68342400 ],
  [ 68342400, 68428800 ],
  [ 68428800, 68515200 ],
  [ 68515200, 68601600 ],
  [ 68601600, 68688000 ],
  [ 68688000, 68774400 ],
  [ 68774400, 68860800 ],
  [ 68860800, 68947200 ],
  [ 68947200, 69033600 ],
  [ 69033600, 69120000 ],
  [ 69120000, 69206400 ],
  [ 69206400, 69292800 ],
  [ 69292800, 69379200 ],
  [ 69379200, 69465600 ],
  [ 69465600, 69552000 ],
  [ 69552000, 69638400 ],
  [ 69638400, 69724800 ],
  [ 69724800, 69811200 ],
  [ 69811200, 69897600 ],
  [ 69897600, 69984000 ],
  [ 69984000, 70070400 ],
  [ 70070400, 70156800 ],
  [ 70156800, 70243200 ],
  [ 70243200, 70329600 ],
  [ 70329600, 70416000 ],
  [ 70416000, 70502400 ],
  [ 70502400, 70588800 ],
  [ 70588800, 70675200 ],
  [ 70675200, 70761600 ],
  [ 70761600, 70848000 ],
  [ 70848000, 70934400 ],
  [ 70934400, 71020800 ],
  [ 71020800, 71107200 ],
  [ 71107200, 71193600 ],
  [ 71193600, 71280000 ],
  [ 71280000, 71366400 ],
  [ 71366400, 71452800 ],
  [ 71452800, 71539200 ],
  [ 71539200, 71625600 ],
  [ 71625600, 71712000 ],
  [ 71712000, 71798400 ],
  [ 71798400, 71884800 ],
  [ 71884800, 71971200 ],
  [ 71971200, 72057600 ],
  [ 72057600, 72144000 ],
  [ 72144000, 72230400 ],
  [ 72230400, 72316800 ],
  [ 72316800, 72403200 ],
  [ 72403200, 72489600 ],
  [ 72489600, 72576000 ],
  [ 72576000, 72662400 ],
  [ 72662400, 72748800 ],
  [ 72748800, 72835200 ],
  [ 72835200, 72921600 ],
  [ 72921600, 73008000 ],
  [ 73008000, 73094400 ],
  [ 73094400, 73180800 ],
  [ 73180800, 73267200 ],
  [ 73267200, 73353600 ],
  [ 73353600, 73440000 ],
  [ 73440000, 73526400 ],
  [ 73526400, 73612800 ],
  [ 73612800, 73699200 ],
  [ 73699200, 73785600 ],
  [ 73785600, 73872000 ],
  [ 73872000, 73958400 ],
  [ 73958400, 74044800 ],
  [ 74044800, 74131200 ],
  [ 74131200, 74217600 ],
  [ 74217600, 74304000 ],
  [ 74304000, 74390400 ],
  [ 74390400, 74476800 ],
  [ 74476800, 74563200 ],
  [ 74563200, 74649600 ],
  [ 74649600, 74736000 ],
  [ 74736000, 74822400 ],
  [ 74822400, 74908800 ],
  [ 74908800, 74995200 ],
  [ 74995200, 75081600 ],
  [ 75081600, 75168000 ],
  [ 75168000, 75254400 ],
  [ 75254400, 75340800 ],
  [ 75340800, 75427200 ],
  [ 75427200, 75513600 ],
  [ 75513600, 75600000 ],
  [ 75600000, 75686400 ],
  [ 75686400, 75772800 ],
  [ 75772800, 75859200 ],
  [ 75859200, 75945600 ],
  [ 75945600, 76032000 ],
  [ 76032000, 76118400 ],
  [ 76118400, 76204800 ],
  [ 76204800, 76291200 ],
  [ 76291200, 76377600 ],
  [ 76377600, 76464000 ],
  [ 76464000, 76550400 ],
  [ 76550400, 76636800 ],
  [ 76636800, 76723200 ],
  [ 76723200, 76809600 ],
  [ 76809600, 76896000 ],
  [ 76896000, 76982400 ],
  [ 76982400, 77068800 ],
  [ 77068800, 77155200 ],
  [ 77155200, 77241600 ],
  [ 77241600, 77328000 ],
  [ 77328000, 77414400 ],
  [ 77414400, 77500800 ],
  [ 77500800, 77587200 ],
  [ 77587200, 77673600 ],
  [ 77673600, 77760000 ],
  [ 77760000, 77846400 ],
  [ 77846400, 77932800 ],
  [ 77932800, 78019200 ],
  [ 78019200, 78105600 ],
  [ 78105600, 78192000 ],
  [ 78192000, 78278400 ],
  [ 78278400, 78364800 ],
  [ 78364800, 78451200 ],
  [ 78451200, 78537600 ],
  [ 78537600, 78624000 ],
  [ 78624000, 78710400 ],
  [ 78710400, 78796800 ],
  [ 78796800, 78883200 ],
  [ 78883200, 78969600 ],
  [ 78969600, 79056000 ],
  [ 79056000, 79142400 ],
  [ 79142400, 79228800 ],
  [ 79228800, 79315200 ],
  [ 79315200, 79401600 ],
  [ 79401600, 79488000 ],
  [ 79488000, 79574400 ],
  [ 79574400, 79660800 ],
  [ 79660800, 79747200 ],
  [ 79747200, 79833600 ],
  [ 79833600, 79920000 ],
  [ 79920000, 80006400 ],
  [ 80006400, 80092800 ],
  [ 80092800, 80179200 ],
  [ 80179200, 80265600 ],
  [ 80265600, 80352000 ],
  [ 80352000, 80438400 ],
  [ 80438400, 80524800 ],
  [ 80524800, 80611200 ],
  [ 80611200, 80697600 ],
  [ 80697600, 80784000 ],
  [ 80784000, 80870400 ],
  [ 80870400, 80956800 ],
  [ 80956800, 81043200 ],
  [ 81043200, 81129600 ],
  [ 81129600, 81216000 ],
  [ 81216000, 81302400 ],
  [ 81302400, 81388800 ],
  [ 81388800, 81475200 ],
  [ 81475200, 81561600 ],
  [ 81561600, 81648000 ],
  [ 81648000, 81734400 ],
  [ 81734400, 81820800 ],
  [ 81820800, 81907200 ],
  [ 81907200, 81993600 ],
  [ 81993600, 82080000 ],
  [ 82080000, 82166400 ],
  [ 82166400, 82252800 ],
  [ 82252800, 82339200 ],
  [ 82339200, 82425600 ],
  [ 82425600, 82512000 ],
  [ 82512000, 82598400 ],
  [ 82598400, 82684800 ],
  [ 82684800, 82771200 ],
  [ 82771200, 82857600 ],
  [ 82857600, 82944000 ],
  [ 82944000, 83030400 ],
  [ 83030400, 83116800 ],
  [ 83116800, 83203200 ],
  [ 83203200, 83289600 ],
  [ 83289600, 83376000 ],
  [ 83376000, 83462400 ],
  [ 83462400, 83548800 ],
  [ 83548800, 83635200 ],
  [ 83635200, 83721600 ],
  [ 83721600, 83808000 ],
  [ 83808000, 83894400 ],
  [ 83894400, 83980800 ],
  [ 83980800, 84067200 ],
  [ 84067200, 84153600 ],
  [ 84153600, 84240000 ],
  [ 84240000, 84326400 ],
  [ 84326400, 84412800 ],
  [ 84412800, 84499200 ],
  [ 84499200, 84585600 ],
  [ 84585600, 84672000 ],
  [ 84672000, 84758400 ],
  [ 84758400, 84844800 ],
  [ 84844800, 84931200 ],
  [ 84931200, 85017600 ],
  [ 85017600, 85104000 ],
  [ 85104000, 85190400 ],
  [ 85190400, 85276800 ],
  [ 85276800, 85363200 ],
  [ 85363200, 85449600 ],
  [ 85449600, 85536000 ],
  [ 85536000, 85622400 ],
  [ 85622400, 85708800 ],
  [ 85708800, 85795200 ],
  [ 85795200, 85881600 ],
  [ 85881600, 85968000 ],
  [ 85968000, 86054400 ],
  [ 86054400, 86140800 ],
  [ 86140800, 86227200 ],
  [ 86227200, 86313600 ],
  [ 86313600, 86400000 ]
];