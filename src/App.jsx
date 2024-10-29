import { useEffect, useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import SearchSection from "./components/SearchSection";
import { fetchCameraData, updateCameraStatus } from "./services/api";
import "./App.css";

const App = () => {
  const [cameraData, setCameraData] = useState([]);
  const [filteredCameraData, setFilteredCameraData] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCameraData();
      const data = response.data;
      setCameraData(data);
      setFilteredCameraData(data);
    };
    fetchData();
  }, []);

  // Handle status toggle
  const handleStatusToggle = async (id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    const updatedCamera = await updateCameraStatus(id, newStatus);

    if (updatedCamera) {
      setCameraData((prevData) =>
        prevData.map((camera) =>
          camera._id === id ? { ...camera, status: newStatus } : camera
        )
      );
      setFilteredCameraData((prevData) =>
        prevData.map((camera) =>
          camera._id === id ? { ...camera, status: newStatus } : camera
        )
      );
    }
  };

  // Filter & search functionality
  useEffect(() => {
    let filteredData = cameraData;
    if (searchText) {
      filteredData = filteredData.filter((camera) =>
        camera.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (locationFilter) {
      filteredData = filteredData.filter(
        (camera) => camera.location === locationFilter
      );
    }
    if (statusFilter) {
      filteredData = filteredData.filter(
        (camera) => camera.status === statusFilter
      );
    }
    setFilteredCameraData(filteredData);
    setCurrentPage(1);
  }, [searchText, locationFilter, statusFilter, cameraData]);

  // Handle Delete
  const handleDelete = (id) => {
    const updatedData = cameraData.filter((camera) => camera._id !== id);
    setCameraData(updatedData);
    setFilteredCameraData((prevFiltered) =>
      prevFiltered.filter((camera) => camera._id !== id)
    );
  };

  // Pagination Logic
  const totalItems = filteredCameraData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCameraData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calculate endItem without Math.min
  const endItem = indexOfLastItem > totalItems ? totalItems : indexOfLastItem;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Header />

      <SearchSection searchText={searchText} setSearchText={setSearchText} />

      <Table
        cameraData={currentItems}
        locationOptions={[
          ...new Set(cameraData.map((camera) => camera.location)),
        ]}
        statusOptions={[...new Set(cameraData.map((camera) => camera.status))]}
        handleDelete={handleDelete}
        setSearchText={setSearchText}
        setLocationFilter={setLocationFilter}
        setStatusFilter={setStatusFilter}
        handleStatusToggle={handleStatusToggle}
      />

      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        startItem={indexOfFirstItem + 1}
        endItem={endItem}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
