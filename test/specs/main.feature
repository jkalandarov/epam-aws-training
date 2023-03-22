Feature: Test public and private instances

  Scenario: Check public instances
    Given I go to baseUrl
    Then I should see json reponse
    Then I should see json response to have following properties and values
      | property          | value       |
      | availability_zone | us-east-1a  |
      | private_ipv4      | 10.0.64.10  |
      | region            | us-east-1   |