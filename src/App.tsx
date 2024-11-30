import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import CommunityScreen from './screens/CommunityScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryScreen from './screens/CategoryScreen';
import ReportScreen from './screens/ReportScreen';
import CatProfileScreen from './screens/CatProfileScreen';
import ParkProfileScreen from './screens/ParkProfileScreen';
import AuthScreen from './screens/AuthScreen';
import SearchScreen from './screens/SearchScreen';
import CitiesScreen from './screens/admin/CitiesScreen';
import CategoriesManagementScreen from './screens/admin/CategoriesScreen';
import SupportersScreen from './screens/community/SupportersScreen';
import DiscussionScreen from './screens/community/DiscussionScreen';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/map" element={<MapScreen />} />
            <Route path="/community" element={<CommunityScreen />} />
            <Route path="/community/supporters" element={<SupportersScreen />} />
            <Route path="/community/discussions/:id" element={<DiscussionScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/profile/:id" element={<ProfileScreen />} />
            <Route path="/categories" element={<CategoriesScreen />} />
            <Route path="/categories/:id" element={<CategoryScreen />} />
            <Route path="/report" element={<ReportScreen />} />
            <Route path="/cat/:id" element={<CatProfileScreen />} />
            <Route path="/park/:id" element={<ParkProfileScreen />} />
            <Route path="/auth" element={<AuthScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/admin/cities" element={<CitiesScreen />} />
            <Route path="/admin/categories" element={<CategoriesManagementScreen />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}