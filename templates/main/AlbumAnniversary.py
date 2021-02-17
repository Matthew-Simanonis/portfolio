import requests, smtplib, os, json, datetime
import pandas as pd
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage


emails = ["msimanonis@gmail.com", "csimanonis@comcast.net", "Nickymcmusic@gmail.com", 
        "b.flanagan17@gmail.com", "arjuna1844@gmail.com", "madysen.sima@gmail.com", 'luisavarg818@gmail.com',
        "micelifrank0@gmail.com"
        ]
albums = {
    'red hot chili peppers': ['by the way', 'californication', 'stadium arcadium', 'blood sugar sex magik', 'mothers milk', 'the uplift mofo party plan', 'the getaway', 'freaky styley', 'red hot chili peppers', 'one hot minute'], 
    'the beatles' : ['sgt peppers lonely hearts club band', 'abbey road', 'magical mystery tour', 'the beatles', 'revolver', 'Help!', 'rubber soul'],
    'john frusciante' : ['enclosure', 'Letur-Lefr', 'PBX funicular intaglio zone', 'the empyrean', 'curtains', 'DC_EP', 'inside of emptiness', 'shadows collide with people', 'a sphere in the heart of silence', 'the will to death', 'from the sounds inside', 'to record only water for ten days', 'Niandra_LaDes_and_Usually_Just_a_T-Shirt'], 
    'arctic monkeys' : ['AM', 'humbug', 'favourite worst nightmare', 'whatever people say i am, that\'s what i\'m not', 'tranquility base hotel & casino'],
    'kanye west' : ['the life of pablo', 'yeezus', 'my beautiful dark twisted fantasy', '808s & heartbreak', 'graduation', 'late registration', 'the college dropout'],
    'portugal, the man' : ['woodstock', 'evil friends', 'in the mountain in the cloud', 'american ghetto', 'the satanic satanist', 'censored colors', 'church mouth'],
    'modest mouse' : ['we were dead before the ship even sank', 'the moon & antarctica', 'the lonesome crowded west', 'good news for people who love bad news', 'This Is a Long Drive for Someone with Nothing to Think About'],
    'st vincent' : ['st vincent', 'marry me', 'masseduction', 'actor', 'strange mercy'],
    'bon iver' : ['bon iver', 'for emma, forever ago', 'i,i', '22, A million', 'blood bank'],
    'gorillaz' : ['gorillaz', 'demon days', 'plastic beach', 'the now now'],
    'the black keys' : ['turn blue', 'el camino', 'attack & release', 'brothers'],
    'david bowie' : ['blackstar', '"Heroes"', 'station to station', 'hunky dory', 'the rise and fall of ziggy stardust and the spiders from mars'],
    'hippo campus' : ['landmark', 'bambi', 'demos II'],
    'saint motel' : ['saintmotelevision', 'voyeur'],
    'beach house' : ['beach house', 'bloom', 'teen dream', 'devotion', 'depression cherry', 'thank your lucky stars', '7'],
    'future islands' : ['the far field', 'singles'],
    'arcade fire' : ['reflektor', 'the suburbs', 'neon bible', 'funeral'],
    'the smashing pumpkins' : ['siamese dream'],
    'tame impala' : ['lonerism', 'currents', 'the slow rush', 'innerspeaker'],
    'radiohead' : ['a moon shaped pool', 'in rainbows', 'hail to the theif', 'amnesiac', 'kid a', 'ok computer', 'the bends'],
    'run the jewels' : ['run the jewels', 'run the jewels 2', 'run the jewels 3'],
    'the strokes' : ['angles', 'room on fire', 'is this it'],
    'wu-tang clan' : ['Enter the Wu-Tang (36 Chambers)'],
    'cage the elephant' : ['melophobia', 'cage the elephant', 'tell me i\'m pretty', 'social cues'],
    'daft punk' : ['alive 2007'],
    'father john misty' : ['pure comedy', 'i love you, honeybear', 'god\'s favorite customer', 'fear fun'],
    'florence and the machine' : ['high as hope', 'lungs'],
    'glass animals' : ['how to be a human being', 'zaba', 'dreamland'],
    'gotye' : ['making mirrors'],
    'kid cudi' : ['Man_on_the_Moon:_The_End_of_Day', 'Man_on_the_Moon_II:_The_Legend_of_Mr._Rager', 'indicud'],
    'mac miller' : ['swimming', 'circles', 'GO:OD AM'],
    'MGMT' : ['little dark age', 'oracular spectacular'],
    'the neighborhood' : ['I love you.', 'wiped out!'],
    'led zeppelin' : ['led zeppelin', 'led zeppelin II', 'led zeppelin III', 'led Zeppelin IV', 'Presence', 'physical Graffiti'],
    'nas' : ['illmatic'],
    'sufjan stevens' : ['illinois', 'age of adz'],
    'pink floyd' : ['dark side of the moon', 'the wall', 'animals'],
    'queens of the stone age' : ['...Like Clockwork'],
    'thom yorke' : ['anima'],
    'ratatat' : ['classics'],
    'LCD soundsystem' : ['american dream', 'sound of silver', 'this Is happening', 'LCD soundsystem'],
    'john lennon' : ['imagine', 'john lennon/plastic ono band'],
    'lana del rey' : ['ultraviolence'],
    'kids see ghosts' : ['kids see ghosts'],
    'fleetwood mac' : ['rumours'],
    'killer mike' : ['r.a.p. music'],
    'animal collective' : ['merriweather post pavilion'],
    'boygenius' : ['boygenius'],
    'supertramp' : ['breakfast in america'],
    'vampire weekend' : ['vampire weekend'],
    'børns' : ['dopamine', 'blue madonna'],
    'gotye' : ['making mirrors'],
    'alt-j' : ['an awesome wave', 'relaxer', 'this is all yours'],
    'eagles' : ['eagles', 'desperado', 'on the border'],
    'the avalanches' : ['since i left you', 'wildflower'],
    'passion pit' : ['manners', 'gossamer']
}

def albumCheck(action):  
    try:
        with open('albums.csv', encoding="latin-1") as csvfile:         # Open CSV File
            df = pd.read_csv(csvfile)              # Pandas read to dataframe
            df.drop_duplicates(subset='title', keep='last', inplace=True)   # Drop any duplicates
            df.to_csv('albums.csv', index=False, encoding="latin-1")                                               # Show Dataframe

            if 'a' in action:
                albumname = (input('Input album name: '))
                artistname = smart_title(input('Input artist name: '))
                addalbum(artistname.title(), albumname.title())
                print(f'Added: {albumname}')
                exit(0)
            elif 'c' in action:
                index = checkdate(df)       # Checkdate to get index of album
                if len(index) >= 1:         # If return with value
                    for i in index:
                        for email in emails:
                            send_mail_img(df, i, email)    # Send email for each match
                    return {'success': True, 'date': datetime.date.today()}
                else:
                    return {'success': False, 'date': datetime.date.today()}
            elif 'r' in action:
                remove = input('What title would you like to remove?')
            elif 'v' in action:
                request = ''
                want = input('View what? [title, artist]')
                if 'a' in want:
                    request = 'artist'
                if 't' in want:
                    request = 'title'
                name = input(f'Enter {request}name: ')
                name = smart_title(name)
                df = df[df[request].str.contains(name)]
                print(df)
            elif 'd' in action:
                check = input('Input Date: (MM-DD)')
                df = df[df["release"].str.contains('-'+check)]
                print(df)
                send_mail_img(df, 0, emails[0])
            elif 't' in action:
                artist = input('Input artist ')
                for album in albums[artist]:
                    try:
                        addalbum(smart_title(artist.title()), smart_title(album.title()))
                    except:
                        print('\n', artist, i, 'failed\n')
            elif 'm' in action:
                for key in albums:
                    for i in albums[key]:
                        try:
                            addalbum(smart_title(key), smart_title(i))
                        except:
                            print('\n', key, i, 'failed\n')
    except FileNotFoundError:                   # If no CSV file 'albums.csv'
        return False

def checkdate(dataframe):
    today = pd.to_datetime('today').strftime('%m-%d')       # Grab MM-DD from today's date
    regex = r'\d{4}-' + today                               # Create regular expression
    bools = dataframe.release.str.contains(regex)           # Check df for today's date
    index = bools[bools].index.values                       # Get index values
    return(index)                                           # Return index values

        

def send_mail_img(dataframe, index, email):
    title = dataframe.iloc[index]['title']
    artist = dataframe.iloc[index]['artist']    # Find title, artist, release, URL from dataframe at index
    release = dataframe.iloc[index]['release']
    URL = dataframe.iloc[index]['URL']
    summary = dataframe.iloc[index]['summary']
    attachment = f'd://python/scripts/albums/{title} by {artist}.png'
    release_year = int(release[0:4])
    year = datetime.date.today().year
    age = year - release_year
    msg = MIMEMultipart()
    msg["To"] = email
    msg["From"] = 'msimanonis@gmail.com'
    msg["Subject"] = 'Happy Anniversary ' + title + '!'
    body = f'The album {title} by {artist} was released {age} years ago today, in {release_year}!<br><br>More info:<br>{URL}'
    footer =  f'<br><br><br><br><br><br><br><br><br><br><br><br><br> THIS IS AN AUTOMATICALLY GENERATED EMAIL<br><br>Attachment: <br>'

    msgText = MIMEText('<b>%s</b><br><br><img src="cid:%s"><br><br>"%s"<br><footer>%s</footer>' % (body, attachment, summary, footer), 'html')  
    msg.attach(msgText)   # Added, and edited the previous line

    fp = open(attachment, 'rb')                                                    
    img = MIMEImage(fp.read(), _subtype='png')
    fp.close()
    img.add_header('Content-ID', '<{}>'.format(attachment))
    msg.attach(img)
    
    # Send the message via local SMTP server.
    server = smtplib.SMTP('smtp.gmail.com', 587)    # Server Stuff
    server.ehlo()
    server.starttls()
    server.ehlo()
    server.login('msimanonis@gmail.com', 'ouepwzqkbydclmre')
    server.sendmail("msimanonis@gmail.com", email, msg.as_string())
    server.quit()


    print(title, artist, age)

def month_string_to_number(string):   # From https://stackoverflow.com/a/33736132
    m = {
        'jan': 1,
        'feb': 2,
        'mar': 3,
        'apr':4,
         'may':5,
         'jun':6,       # Change month from word, to a number
         'jul':7,
         'aug':8,
         'sep':9,
         'oct':10,
         'nov':11,
         'dec':12
        }
    s = string.strip()[:3].lower()
    try:
        out = m[s]
        return out
    except:
        raise ValueError('Not a month')

def replace_all(text, dic):  # From https://stackoverflow.com/a/6117042
    for i, j in dic.items():
        text = text.replace(i, j)      # Replaces text from tuples in dictionary
    return text 

def smart_title(s):     # From https://stackoverflow.com/a/25513135
    return (s[:1].upper() + s[1:])    # .title capitalization, but keeps original caps
