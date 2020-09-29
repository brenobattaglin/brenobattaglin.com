---
title: A cross-platform offline password manager
author: Breno Battaglin
date: 2020-09-28
hero: ./images/hero.jpg
excerpt: Off-line. Simple. Secure.
---
I think [Master Password](https://masterpassword.app/) one of the best password managers. This offline password manager uses an algorithm to generate your passwords **only** when you enter your full name and the master password, used as credentials.

As described in Wikipedia:

>By not storing the passwords anywhere, this approach tries to make it harder for attackers to steal or intercept them. It also removes the need for synchronization between devices, and backups of potential password databases. It also removes the risk of a data breach. They are sometimes called sync-less password managers.

Master Password is currently available on these platforms:
- iOS
- Android
- Mac
- Desktop (Java version)
- Terminal
- Web

## The Parameters
Master Password uses the following parameters to generate your passwords:

- Full Name: The user's full name is chosen as it provides a sufficiently high level of entropy, while being unlikely to be forgotten.
- Master Password: The secret used for generating the master key.
- Site Name: A unique name for the service the password is intended for. Usually, the bare domain name is a good choice.
- Counter: An integer that can be incremented when the service requests a new password. By default, it is 0.
- Password Type: The password type defines the length and the constitution of the resulting password, some of the password types are:
  - Maximum Security Password (20 ASCII printable characters)
  - Long Password (14 ASCII printable characters)
  - Medium Password (8 ASCII printable characters)
  - Short Password (4 ASCII printable characters)
  - Basic Password (8 alphanumeric characters)
  - PIN (4 digits)

## How to use it
Here I'll show you an example using the web version. It's a simple version and I do not recommend for daily use. Try the Desktop, Mac, iOS or Android if you decide to use Master Password as your password manager, they have more features and are easier for daily use.

### Signing in
[Click here to access the web version](https://js.masterpassword.app/). You'll see a sign in page. 

#### Full Name and Master Password
Inform the following full name and the master password:

    Full name: John Doe
    Master Password: clickaboardgumlava

#### Algorithm Version
You can choose the algorithm version below (From V0 to V3), but you don't have to, it is unnecessary and one less thing to remember when you sign in on another devices.

After that you'll be redirected to the password generation page.

### Generating a Site Password

#### Site Name
Enter the site you want to generate the password, like *twitter.com*. If you entered John Doe as the full name and the master password I informed you previously, the generated Twitter password will be:

    Wiri4&YofaYuhj

#### The Counter
If you increase the counter to 2, note the password will change. If you entered the credential I informed you, the password will be the folowing:

    XacgZaxeGevd0@

#### The Password Type
The *long* password type comes selected by default, but if you change it to *maximum* for example, the generated password will be:

    k2;qox9OOqqayeQbBY*b

And that's it! In this example I showed you how to generate a site password using an example of credential. Try now using your own full name and master password.