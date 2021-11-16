enum LoadingState {
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded",
};

const isLoading = (state: LoadingState) => state === LoadingState.beforeLoad;

console.log(isLoading(LoadingState.beforeLoad));

//enum with maps
const englishLoadingStates  = {
   [LoadingState.beforeLoad] : 'Before Load'
}

console.log(englishLoadingStates["beforeLoad"]);
console.log(englishLoadingStates[LoadingState.beforeLoad]);
// console.log(englishLoadingStates["something else"]);  //gives error