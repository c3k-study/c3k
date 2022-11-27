![A1.png](https://www.hackbox.one/wp-content/uploads/2022/11/A1.png)


* * *

## Introduce

**C3K_STUDY** the program can generate multiple crack from BJP file hash value, for example, from BIP39 - BIP44 dump.
In less than a minute time, file is more than **29.000** a HASH of **25.300.000** line list of words. Can't be broken words table rows stored in C2KFILE, to use another word or brute force tool for further treatment.
Mainly used for used for security, penetration testing, and utility. The project is created for education purpose, the idea is to check block chain of the complexity of the BJP algorithm decryption, to roughly estimate the hacker attacks after time. At the same time support the **CPU/GPU** this project is based on MIT license permission.

- **Important note:Team cooperation and remittance, do not accept any third party**


## Team 

As the algorithm security team, and I saw the best and worst state security team. Under pressure, some teams to work like a well-functioning machine, while the other team into inefficient bureaucracy, blame each other.
Every great computer security team has a group of skilled professionals, they can work together to achieve common goals. Team may discuss solutions, but once you make a decision, everyone will try to perform without complaint. Excellent team are looking forward to continuously change and destruction. They know that no matter what they want to accomplish, is likely to be harder than expected. Any excellent computer security team needs to have one or more hackers. These men and women are flowing in the blood of the hacker's blood. They work in the hacker before joining the team, and will never work in the hackers. Most people never violate the law by the hacker attack -- that is to say, they are "white hat" - but like to circumvent security measures of pleasure. They use hacking tools and methods, they know how hackers want to. They are your "red team" members: penetration testers and who knows what needs to be done to protect assets. We welcome more upgrade **C3K** together ginseng in the us

## C3K -> principle

Entropy must come from the powerful source of randomness. This means that a fair coin toss, throw a fair dice, noise measurement, etc. Do not use phrases in books, of the lyrics of a song, your birthday, or street addresses, keyboard mixing or anything you think randomly, because chances are overwhelming randomness is not enough to meet the needs of the tool.

**Do not store entropy.**

Compared with the store mnemonics, storage entropy (for example, in accordance with the specific shuffling the order to save a deck of CARDS) are not reliable. Rather than store entropy, storage from entropy generated mnemonics. Steganography in store mnemonics may be beneficial.

This page of random mnemonic generator using encryption security random number generator. Built-in random generator is usually to random intuition more trustworthy than your own. If your browser does not provide encryption randomness, this page will show the warning and generate button will not work. In this case, you may choose to use their own source of entropy.
Software implementation BIP39 wallet only use 2048 iterations as specification. Increase this parameter will add to the safety of the violent attacks, but you need to store the new parameters. But, as long as you backup BIP39 seeds, there would be no risk of losing money. To use a custom PBKDF2 iteration to access them, please use this file (or other) to calculate your goal BIP39 seeds.

![A2.png](https://www.hackbox.one/wp-content/uploads/2022/11/a2.png)

Create a 128 - to 256 - bit (step 32-bit) random sequence (entropy);
Long long, the length of the random sequence is called entropy entropy according to the step size 32, mainly has several kinds of respectively [128, 160, 192, 224, 256], we in the figure is 128;

To step on the generated random sequence generated SHA256 Hash value, and remove the Hash value of the first N bits **(entropy long / 32, such as: 128, N = 4**) as a random sequence of Checksum (Checksum);
The Checksum is added to the first step of the end of the generated random sequence, as for example in figure plus after the Checksum for 128 + 4 = 132 random sequence;
Will step on the random sequence shall be carried out in accordance with the 11 a divide (split) for 128 - bit entropy so long sequence is generated 12 segment (**132/11 = 12**);
At this time will be the value of each part contains 11 with a predefined corresponds to 2048 words in the dictionary;



![A3.png](https://www.hackbox.one/wp-content/uploads/2022/11/generate-hd-wallet.jpg)

**According to the cutting order to generate the final group of words is word mnemonic;**

1. The BJP - 39 wordlist dictionary (2048 words)
2. The EFF diceware long words table for a five dice (7776 words)
3. For the EFF of four dice dice short glossary (1296 words)
4. Numbers (0-9) - 10 characters
5. The alphabet (uppercase or lowercase letters) - 26 characters
6. Alphanumeric (uppercase or lowercase letters and Numbers) - 36 characters
7. Let us remember the following:

![A3.png](https://www.hackbox.one/wp-content/uploads/2022/11/extend-pubkey.jpg)

Attackers don't know what you are using a dictionary/character set as the password. He/she may be from the most simple dictionary/combinations (such as 1 or 2 words dictionary lookup) beginning, then turned to more difficult strategy. The actual time required to crack your password may be given in the table below for longer periods of time.
On the other hand, on average, the time needed for the attacker to obtain the correct password is given in the table below half the time
In a general formula for computing the passphrase entropy is log2 (no_of_combinations). So, for example, log2 (2048 ^ 2) = 22 entropy. Recall that the PKCS standard advice salt length for at least 64.


![A3.png](https://www.hackbox.one/wp-content/uploads/2022/11/123-1.jpg)

`
CHMAC_SHA512::CHMAC_SHA512(const unsigned char* key, size_t keylen)
{
    unsigned char rkey[128];
    if (keylen <= 128) {
        memcpy(rkey, key, keylen);
        memset(rkey + keylen, 0, 128 - keylen);
    } else {
        CSHA512().Write(key, keylen).Finalize(rkey);
        memset(rkey + 64, 0, 64);
    }

    for (int n = 0; n < 128; n++)
        rkey[n] ^= 0x5c;
    outer.Write(rkey, 128);

    for (int n = 0; n < 128; n++)
        rkey[n] ^= 0x5c ^ 0x36;
    inner.Write(rkey, 128);
}

void CHMAC_SHA512::Finalize(unsigned char hash[OUTPUT_SIZE])
{
    unsigned char temp[64];
    inner.Finalize(temp);
    outer.Write(temp, 64).Finalize(hash);
}
`

**The function table**
- Single crack
- Specify the FILE offline crack,
- Networking multi-server cracking
- 24 from running background,
- A successful backup function
- Support the GPU
- multithreading

![A7.png](https://www.hackbox.one/wp-content/uploads/2022/11/e7.gif)

## Installation

```
> git clone https://github.com/c3k-study/c3k.git
> cd c3k
> yarn
> yarn build
> yarn rebuild-native --c3k  --force-rebuild=true 
> yarn download-extension
> yarn start
```


