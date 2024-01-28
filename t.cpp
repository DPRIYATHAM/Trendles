#include <iostream>
#include <vector>
using namespace std;
vector<int> knapsack(int m, int n, const vector<int>& weights, const vector<int>& profits) {
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int w = 0; w <= m; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = max(dp[i-1][w], profits[i-1] + dp[i-1][w-weights[i-1]]);
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    vector<int> selectedItems(n, 0);
    int i=n,j=m;
    while (i > 0 && j > 0) {
        if (dp[i][j] != dp[i-1][j]) {
            selectedItems[i-1] = 1;
            j -= weights[i-1];
        }
        i--;
    }
    return selectedItems;
}
int main() {
    int m, n;
    cout << "Enter Knapsack size (m): ";
    cin >> m;
    cout << "Enter number of items (n): ";
    cin >> n;
    vector<int> weights(n), profits(n);
    cout << "Enter weights:\n";
    for (int i = 0; i < n; i++) {
        cin >> weights[i];
    }
    cout << "Enter profits:\n";
    for (int i = 0; i < n; i++) {
        cin >> profits[i];
    }
    vector<int> selectedItems = knapsack(m, n, weights, profits);
    cout << "Output: {";
    for (int i=0; i<n; i++) {
        cout << selectedItems[i];
        if (i<n-1) {
            cout << ", ";
        }
    }
    cout << "}" << endl;
    return 0;
}