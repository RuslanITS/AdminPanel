import {useEffect, useState, type ChangeEvent, type FormEvent} from "react";
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axiosApi from "../../api/axiosApi";
import type {Page} from "../../type";

const Admin = () => {
  const navigate = useNavigate();

  const [selectedPage, setSelectedPage] = useState("about");

  const [pageData, setPageData] = useState<Page>({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchPage = async () => {
      const response = await axiosApi.get<Page>(
        `/pages/${selectedPage}.json`
      );

      if (response.data) {
        setPageData(response.data);
      }
    };

    void fetchPage();
  }, [selectedPage]);

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPage(e.target.value);
  };

  const onFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await axiosApi.put(
      `/pages/${selectedPage}.json`,
      pageData
    );

    navigate(`/pages/${selectedPage}`);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Page</Form.Label>

        <Form.Select
          value={selectedPage}
          onChange={onSelectChange}
        >
          <option value="home">Home</option>
          <option value="about">About</option>
          <option value="contacts">Contacts</option>
          <option value="services">Services</option>
          <option value="divisions">Divisions</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>

        <Form.Control
          type="text"
          name="title"
          value={pageData.title}
          onChange={onFieldChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Content</Form.Label>

        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={pageData.content}
          onChange={onFieldChange}
        />
      </Form.Group>

      <Button type="submit">
        Save
      </Button>
    </Form>
  );
};

export default Admin;