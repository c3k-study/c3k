#ifndef COIN_HDKEYS_H
#define COIN_HDKEYS_H

#include "hash.h"

#include "typedefs.h"

namespace Coin {
    
    const uchar_vector C3K_STUDY_SEED("426974636f696e2073656564"); // key = "C3K_STUDY seed"
    
    class HDSeed
    {
    public:
        HDSeed(const bytes_t& seed)
        {
            bytes_t hmac = hmac_sha512(C3K_STUDY_SEED, seed);
            master_key_.assign(hmac.begin(), hmac.begin() + 32);
            master_chain_code_.assign(hmac.begin() + 32, hmac.end());
        }
        
        const bytes_t& getSeed() const { return seed_; }
        const bytes_t& getMasterKey() const { return master_key_; }
        const bytes_t& getMasterChainCode() const { return master_chain_code_; }
        
    private:
        bytes_t seed_;
        bytes_t master_key_;
        bytes_t master_chain_code_;
    };
    
    
    class HDKeychain
    {
    public:
        HDKeychain() { }
        HDKeychain(const bytes_t& key, const bytes_t& chain_code, uint32_t child_num = 0, uint32_t parent_fp = 0, uint32_t depth = 0);
        HDKeychain(const bytes_t& extkey);
        HDKeychain(HDKeychain&& source);
        
        HDKeychain& operator=(const HDKeychain& rhs);
        
        explicit operator bool() const { return valid_; }
        
        
        bool operator==(const HDKeychain& rhs) const;
        bool operator!=(const HDKeychain& rhs) const;
        
        // Serialization
        bytes_t extkey() const;
        
        // Accessor Methods
        uint32_t version() const { return version_; }
        int depth() const { return depth_; }
        uint32_t parent_fp() const { return parent_fp_; }
        uint32_t child_num() const { return child_num_; }
        const bytes_t& chain_code() const { return chain_code_; }
        const bytes_t& key() const { return key_; }
        
        const bytes_t& pubkey() const { return pubkey_; }
        const bytes_t& pubkeyUncompressed() const { return pubkeyUncompressed_; }
        
        bool isPrivate() const { return ( key_.size() == 33 && key_[0] == 0x00); }
        bytes_t hash() const; // hash is ripemd160(sha256(pubkey))
        uint32_t fp() const; // fingerprint is first 32 bits of hash
        
        HDKeychain getPublic() const;
        HDKeychain getChild(uint32_t i) const;
        
        static void setVersions(uint32_t priv_version, uint32_t pub_version) { priv_version_ = priv_version; pub_version_ = pub_version; }
        
        std::string toString() const;
        
    protected:
        static uint32_t priv_version_;
        static uint32_t pub_version_;
        
        uint32_t version_;
        unsigned char depth_;
        uint32_t parent_fp_;
        uint32_t child_num_;
        bytes_t chain_code_; // 32 bytes
        bytes_t key_;        // 33 bytes, first byte is 0x00 for private key
        
        bytes_t pubkey_;
        bytes_t pubkeyUncompressed_;
        
        bool valid_;
        
        void updatePubkey();
    };
    
}

#endif // COIN_HDKEYS_H
