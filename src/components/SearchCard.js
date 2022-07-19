import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import Colors from '../constant/Colors';
import {connect} from 'react-redux';
import {getProducts, addToCart} from '../redux/productList/action';
import {useNavigation} from '@react-navigation/native';
import SearchBar from './SearchBar';

const SearchCard = ({products, fetchProduct, addToCart}) => {
  const [apiData, setApiData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState();
  navigation = useNavigation();
  const addToCartGo = item => {
    addToCart(item.id);
    navigation.navigate('Cart');
  };
  useEffect(() => {
    fetchProduct;
    setApiData(products);
    setFilteredResults(products);
  }, []);

  const searchItems = text => {
    if (text) {
      const newData = apiData.filter(item => {
        const itemData = item.title
          ? item.title.toLowerCase()
          : ''.toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredResults(newData);
      setSearchInput(text);
    } else {
      setFilteredResults(apiData);
      setSearchInput(text);
    }
  };

  return (
    <View>
      <View>
        <SearchBar searchInput={searchInput} searchItems={searchItems} />
      </View>
      <View style={styles.container}>
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredResults}
          keyExtractor={(item, index) => index.toString()}
          // ItemSeparatorComponent={ItemSeparatorView}
          renderItem={itemData}
        /> */}
        <ScrollView>
          {filteredResults?.map((item, ind) => (
            <View key={ind} style={styles.searchCardSection}>
              <View style={styles.leftSection}>
                <Image
                  source={{uri: item.imageLink}}
                  style={styles.cardImage}
                />
                <View style={styles.TextContainer}>
                  <Text style={styles.productName}>{item.title}</Text>
                  <Text style={styles.companyName}>{item.sold_by}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.button}
                  onPress={() => addToCartGo(item)}>
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    products: state.product.product,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: dispatch(getProducts()),
    addToCart: id => dispatch(addToCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchCard);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginTop: moderateScale(5),
  },
  searchCardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(20),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(15),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextContainer: {
    marginLeft: moderateScale(20),
    width: 180,
  },
  productName: {
    fontSize: 15,
    lineHeight: scale(24),
    letterSpacing: scale(0.5),
    color: Colors.darkBlue,
    fontFamily: 'Poppins-SemiBold',
  },
  companyName: {
    fontSize: 10,
    lineHeight: scale(15),
    letterSpacing: scale(0.5),
    color: Colors.buttonText,
    fontFamily: 'Poppins-SemiBold',
  },
  button: {
    paddingHorizontal: moderateScale(18),
    paddingVertical: moderateScale(8),
    backgroundColor: Colors.darkBlue,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    letterSpacing: scale(0.5),
    color: Colors.white,
    fontFamily: 'Poppins-Medium',
  },
  cardImage: {
    width: moderateScale(50),
    height: verticalScale(50),
    borderRadius: 10,
  },
});
