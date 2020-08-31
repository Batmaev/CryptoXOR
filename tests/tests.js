const allSymbolsString = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяё`
const allSymbolsSet = new Set(allSymbolsString)

describe("trans", function() {
    /* Если сначала зашифровать сообщение, а потом расшифровать его, 
       то должно получиться исходное сообщение */
    describe("trans . trans == id", function(){

        /* Короткое - значит до 17 символов.
           Потому что первые 17 символов генерируются 
           линейным конгруэнтным методом, а все последующие - 
           методом Фибоначчи с запаздываниями */
        it("Короткое сообщение на английском", function() {
            const key = 1
            const message = "All's meaningless"
            assert.equal(trans(trans(message, key), key), message)
        })

        it("Короткое сообщение на русском", function() {
            const key = 100
            const message = "Все совсем плохо!"
            assert.equal(trans(trans(message, key), key), message)
        })

        it("Длинное сообщение на английском", function() {
            const key = 1986
            const message = `Suicide is the act of intentionally causing one's own death.[9] Mental disorders - including depression, bipolar disorder, autism, schizophrenia, personality disorders, anxiety disorders, physical disorders such as chronic fatigue syndrome, and substance abuse - including alcoholism and the use of and withdrawal from benzodiazepines - are risk factors.[2][3][10][5] Some suicides are impulsive acts due to stress (such as from financial or academic difficulties), relationship problems (such as breakups or deaths of close ones), or harrassment/bullying.[2][11][12] Those who have previously attempted suicide are at a higher risk for future attempts.[2] Effective suicide prevention efforts include limiting access to methods of suicide - such as firearms, drugs, and poisons; treating mental disorders and substance misuse; careful media reporting about suicide; and improving economic conditions.[2][13] Even though crisis hotlines are common, they have not been well studied.[14][15]. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nisi at sem tincidunt iaculis. Mauris faucibus rhoncus tortor, in ultrices erat lobortis eu. Quisque nibh sem, imperdiet ac tortor et, blandit varius ante. Vivamus ac aliquet lacus. In dignissim ornare arcu ac vehicula. Sed malesuada turpis iaculis nunc feugiat rutrum. Mauris et varius eros. Nullam sapien risus, volutpat vitae diam a, dignissim aliquam augue. Fusce egestas, massa a hendrerit pulvinar, turpis eros viverra tellus, et sodales dolor nibh ut purus. Sed semper interdum luctus. Praesent rhoncus arcu sed porta tempor. Sed ut nulla pulvinar, rhoncus orci in, ullamcorper leo. Duis vestibulum urna eu lacinia dignissim. Maecenas ullamcorper velit augue, eu tempus justo gravida id. Quisque tristique risus sed ornare sodales. Sed facilisis arcu libero, ultrices euismod ligula molestie at. Nunc aliquet lacus sapien, at elementum nulla aliquam eu. Nulla eu augue eu nisl condimentum facilisis non sit amet est. Maecenas pulvinar at quam eget iaculis. Duis diam risus, volutpat in egestas vel, accumsan et orci. Sed blandit sapien at ante porttitor, at lobortis diam lacinia. Vestibulum aliquet sit amet odio vel ullamcorper. Sed vitae ex ac augue imperdiet commodo. Aenean sed risus scelerisque, tristique elit a, dictum mi. In hac habitasse platea dictumst. Vestibulum laoreet lorem fermentum, molestie enim ut, euismod lectus. Morbi consectetur nibh non hendrerit consectetur. Curabitur dapibus nisi nec nisi rutrum, id hendrerit tellus mollis. Vestibulum at velit et mauris mattis molestie.`
            assert.equal(trans(trans(message, key), key), message)
        })

        it("Смесь", function(){
            const key = Math.round(Math.round(Math.PI * 1e8))
            const message = "def index(request): list_teams = Team.objects.filter(team_level__exact=\"U09\") context = {'youngest_teams': list_teams return render(request, '/best/index.html', context) Данная функция использует функцию render() для того, чтобы создать HttpResponse, который будет отправлен назад браузеру. Эта функция является ярлыком; она создает HTML-файл, комбинируя указанный шаблон HTML и некоторые данные для вставки в шаблон (предоставляется в переменной с именем \"context\"). В следующем разделе мы  покажем как данные вставляются в шаблон для создания HTML-кода. Отображение данных (HTML templates)Системы шаблонов позволяют указать структуру выходного документа, используя заполнители для данных, которые будут заполнены при создании страницы. Шаблоны часто используются для создания HTML, но также могут создавать другие типы документов. Django поддерживает как собственную систему шаблонов, так и другую популярную библиотеку Python под названием Jinja2 (она также может быть использована для поддержки других систем, если это необходимо). Фрагмент кода показывает, как выглядит HTML-шаблон, вызванный функцией  render() из предыдущего раздела. Этот шаблон был написан в предположении, что во время рендеринга он будет иметь доступ к переменной списка, называемой youngest_teams (содержащейся в контекстной переменной внутри функции render() выше). Внутри скелета HTML мы имеем выражение, которое сначала проверяет, существует ли переменная youngest_teams, а затем выполняет итерацию в цикле for. На каждой итерации шаблон отображает значение team_name каждой команды в элементе <li>."
            assert.equal(trans(trans(message, key), key), message)
        })

        const ascii = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`

        it("ASCII", function(){
            const key = 2e9 + 1
            const message = ascii
            assert.equal(trans(trans(message, key), key), message)
        })

        it("ASCII-long", function() {
            const key = 2**16
            const message = ascii.repeat(32)
            assert.equal(trans(trans(message, key), key), message)

        })

        // Тильда имеет код 126, который близок к коду символа DEL -- 127
        it("~", function(){
            const key = 0
            const message = '~'.repeat(256)
            assert.equal(trans(trans(message, key), key), message)
        })

        it("Все поддерживаемые символы", function(){
            const key = 123456789
            const message = allSymbolsString
            assert.equal(trans(trans(message, key), key), message)
        })

        it("Все поддерживаемые символы long", function(){
            const key = 1234567890
            const message = allSymbolsString.repeat(16)
            assert.equal(trans(trans(message, key), key), message)
        })
    })



    /*На выходе должны получаться только допустимые символы, 
      иначе получатель не сможет ввести зашифрованное сообщение */
    describe("Are printable", function(){
        /* Короткое - значит до 17 символов.
           Потому что первые 17 символов генерируются 
           линейным конгруэнтным методом, а все последующие - 
           методом Фибоначчи с запаздываниями */
           it("Короткое сообщение на английском", function() {
            const key = 1
            const message = "All's meaningless"

            const encrypted = trans(message, key)

            for (let k = 0; k < encrypted.length; ++k){
                let char = encrypted.charAt(k)
                assert(allSymbolsSet.has(char), 
                `${message.charAt(k)} (${message.charCodeAt(k)}) -> ${char} (${encrypted.charCodeAt(k)})`)
            }
        })

        it("Короткое сообщение на русском", function() {
            const key = 100
            const message = "Все совсем плохо!"
            const encrypted = trans(message, key)

            for (let k = 0; k < encrypted.length; ++k){
                let char = encrypted.charAt(k)
                assert(allSymbolsSet.has(char), 
                `${message.charAt(k)} (${message.charCodeAt(k)}) -> ${char} (${encrypted.charCodeAt(k)})`)
            }
        })

        it("Длинное сообщение на английском", function() {
            const key = 1986
            const message = `Suicide is the act of intentionally causing one's own death.[9] Mental disorders - including depression, bipolar disorder, autism, schizophrenia, personality disorders, anxiety disorders, physical disorders such as chronic fatigue syndrome, and substance abuse - including alcoholism and the use of and withdrawal from benzodiazepines - are risk factors.[2][3][10][5] Some suicides are impulsive acts due to stress (such as from financial or academic difficulties), relationship problems (such as breakups or deaths of close ones), or harrassment/bullying.[2][11][12] Those who have previously attempted suicide are at a higher risk for future attempts.[2] Effective suicide prevention efforts include limiting access to methods of suicide - such as firearms, drugs, and poisons; treating mental disorders and substance misuse; careful media reporting about suicide; and improving economic conditions.[2][13] Even though crisis hotlines are common, they have not been well studied.[14][15]. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt nisi at sem tincidunt iaculis. Mauris faucibus rhoncus tortor, in ultrices erat lobortis eu. Quisque nibh sem, imperdiet ac tortor et, blandit varius ante. Vivamus ac aliquet lacus. In dignissim ornare arcu ac vehicula. Sed malesuada turpis iaculis nunc feugiat rutrum. Mauris et varius eros. Nullam sapien risus, volutpat vitae diam a, dignissim aliquam augue. Fusce egestas, massa a hendrerit pulvinar, turpis eros viverra tellus, et sodales dolor nibh ut purus. Sed semper interdum luctus. Praesent rhoncus arcu sed porta tempor. Sed ut nulla pulvinar, rhoncus orci in, ullamcorper leo. Duis vestibulum urna eu lacinia dignissim. Maecenas ullamcorper velit augue, eu tempus justo gravida id. Quisque tristique risus sed ornare sodales. Sed facilisis arcu libero, ultrices euismod ligula molestie at. Nunc aliquet lacus sapien, at elementum nulla aliquam eu. Nulla eu augue eu nisl condimentum facilisis non sit amet est. Maecenas pulvinar at quam eget iaculis. Duis diam risus, volutpat in egestas vel, accumsan et orci. Sed blandit sapien at ante porttitor, at lobortis diam lacinia. Vestibulum aliquet sit amet odio vel ullamcorper. Sed vitae ex ac augue imperdiet commodo. Aenean sed risus scelerisque, tristique elit a, dictum mi. In hac habitasse platea dictumst. Vestibulum laoreet lorem fermentum, molestie enim ut, euismod lectus. Morbi consectetur nibh non hendrerit consectetur. Curabitur dapibus nisi nec nisi rutrum, id hendrerit tellus mollis. Vestibulum at velit et mauris mattis molestie.`
            const encrypted = trans(message, key)

            for (let k = 0; k < encrypted.length; ++k){
                let char = encrypted.charAt(k)
                assert(allSymbolsSet.has(char), 
                `${message.charAt(k)} (${message.charCodeAt(k)}) -> ${char} (${encrypted.charCodeAt(k)})`)
            }
        })

        it("Смесь", function(){
            const key = Math.round(Math.round(Math.PI * 1e8))
            const message = "def index(request): list_teams = Team.objects.filter(team_level__exact=\"U09\") context = {'youngest_teams': list_teams return render(request, '/best/index.html', context) Данная функция использует функцию render() для того, чтобы создать HttpResponse, который будет отправлен назад браузеру. Эта функция является ярлыком; она создает HTML-файл, комбинируя указанный шаблон HTML и некоторые данные для вставки в шаблон (предоставляется в переменной с именем \"context\"). В следующем разделе мы  покажем как данные вставляются в шаблон для создания HTML-кода. Отображение данных (HTML templates)Системы шаблонов позволяют указать структуру выходного документа, используя заполнители для данных, которые будут заполнены при создании страницы. Шаблоны часто используются для создания HTML, но также могут создавать другие типы документов. Django поддерживает как собственную систему шаблонов, так и другую популярную библиотеку Python под названием Jinja2 (она также может быть использована для поддержки других систем, если это необходимо). Фрагмент кода показывает, как выглядит HTML-шаблон, вызванный функцией  render() из предыдущего раздела. Этот шаблон был написан в предположении, что во время рендеринга он будет иметь доступ к переменной списка, называемой youngest_teams (содержащейся в контекстной переменной внутри функции render() выше). Внутри скелета HTML мы имеем выражение, которое сначала проверяет, существует ли переменная youngest_teams, а затем выполняет итерацию в цикле for. На каждой итерации шаблон отображает значение team_name каждой команды в элементе <li>."
            const encrypted = trans(message, key)

            for (let k = 0; k < encrypted.length; ++k){
                let char = encrypted.charAt(k)
                assert(allSymbolsSet.has(char), 
                `${message.charAt(k)} (${message.charCodeAt(k)}) -> ${char} (${encrypted.charCodeAt(k)})`)
            }
        })

        const ascii = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`

        it("ASCII", function(){
            const key = 2e9 + 1
            const message = ascii
            const encrypted = trans(message, key)

            for (let k = 0; k < encrypted.length; ++k){
                let char = encrypted.charAt(k)
                assert(allSymbolsSet.has(char), 
                `${message.charAt(k)} (${message.charCodeAt(k)}) -> ${char} (${encrypted.charCodeAt(k)})`)
            }
        })

        it("ASCII-long", function() {
            const key = 2**16
            const message = ascii.repeat(32)
            const encrypted = trans(message, key)

            for (let k = 0; k < encrypted.length; ++k){
                let char = encrypted.charAt(k)
                assert(allSymbolsSet.has(char), 
                `${message.charAt(k)} (${message.charCodeAt(k)}) -> ${char} (${encrypted.charCodeAt(k)})`)
            }

        })

        // Тильда имеет код 126, который близок к коду символа DEL -- 127
        it("~", function(){
            const key = 0
            const message = '~'.repeat(256)
            const encrypted = trans(message, key)

            for (let k = 0; k < encrypted.length; ++k){
                let char = encrypted.charAt(k)
                assert(allSymbolsSet.has(char), 
                `${message.charAt(k)} (${message.charCodeAt(k)}) -> ${char} (${encrypted.charCodeAt(k)})`)
            }
        })

        it("Все поддерживаемые символы", function(){
            const key = 123456789
            const message = allSymbolsString
            const encrypted = trans(message, key)

            for (let k = 0; k < encrypted.length; ++k){
                let char = encrypted.charAt(k)
                assert(allSymbolsSet.has(char), 
                `${message.charAt(k)} (${message.charCodeAt(k)}) -> ${char} (${encrypted.charCodeAt(k)})`)
            }
        })

        it("Все поддерживаемые символы long", function(){
            const key = 1234567890
            const message = allSymbolsString.repeat(16)
            const encrypted = trans(message, key)

            for (let k = 0; k < encrypted.length; ++k){
                let char = encrypted.charAt(k)
                assert(allSymbolsSet.has(char), 
                `${message.charAt(k)} (${message.charCodeAt(k)}) -> ${char} (${encrypted.charCodeAt(k)})`)
            }
        })

    })
  
  })