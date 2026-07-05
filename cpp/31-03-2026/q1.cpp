// #include <iostream>
// #include <string>
// using namespace std;

// int main()
// {
//   int arr[5] = {1, 22, 35, 231};
//   int num = 0;
  
//   for (int i = 0; i < 3; i++)
//   {
//     num = num * 10 + arr[i];
//   }
//   cout << "Number from array: " << num << endl;
//   return 0;
// }



#include <iostream>
#include <string>
using namespace std;

int main()
{
  int arr[5] = {1, 22, 35, 231};
  string num_str = "";
  for (int i = 0; i < 5; i++)
{
  num_str = num_str + to_string(arr[i]);
}
return stol(num_str) + 1;
}

