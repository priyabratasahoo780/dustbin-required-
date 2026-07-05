// Static Function Utility:

// static bool isPalindrome(string s) (ignore case, reverse check). 

// Main: 
// cout << StringUtils::isPalindrome("radar")
//  → 1 (true).
// ​
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

class StringUtils {
public:
    static bool isPalindrome(string s) {
    
        // for (char &c : s) {
        //     c = tolower(c);
        // }
    
        // string rev = s;
        // reverse(rev.begin(), rev.end());
        // return s == rev;

        int i=0;
        int j=s.size()-1;
        while(i<j){
            if(tolower(s[i]) == tolower(s[j])){
                i++;
                j--;
                continue;
            }
            return false;
        }
        return true;
    }
};

int main() {
   StringUtils u;
cout<< u.isPalindrome("mon")<< endl;
    return 0;
}



// #include <iostream>
// #include <string>
// #include <algorithm>
// using namespace std;

// class Palindrome{
//     public: 

//     static bool isPalindrome(string word){
//         int j = word.size()-1;
//         int i = 0;
//         while(i<j){
//             if(tolower(word[i]) == tolower(word[j]) ) {
//                 i++;
//                 j--;
//                 continue;
//             }
//             else return false;
            
//         }
//         return true;
//     }
// // };

// class Utils{
//    public: 
   
//    static bool isPalindrome(string word){
//         int j = word.size()-1;
//         int i = 0;
//         while(i<j){
//             if(tolower(word[i]) == tolower(word[j])) {
//                 i++;
//                 j--;
//                 continue;
//             }
//             return false;
//         }
//         return true;

//    }
// };



// int main(){
    
//     // Palindrome p1;

//     // cout<< p1.isPalindrome("radar")<<endl;

//     Utils u;

//     cout<< u.isPalindrome("radar")<< endl;

    
//     return 0;
// }