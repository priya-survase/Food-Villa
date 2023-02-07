export function filterData(searchText, restaurantList) {
  return restaurantList.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
