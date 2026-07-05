#include<iostream>
#include<vector>
using namespace std;

int main()
{
  vector<int> nums = {1,2,3};
  vector<int> ans(nums.size()*2);
  for(int i=0;i<nums.size();i++){
      ans[i] = nums[i];
      ans[i+nums.size()] = nums[i];
  }
  for(int i=0;i<ans.size();i++){
      cout << ans[i] << " ";
  }
    return 0;
}

