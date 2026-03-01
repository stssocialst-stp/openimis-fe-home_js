import { Contributions, useModulesManager } from "@stssocialst-stp/fe-core";
import { DEFAULT } from "../constants";

const HomePage = (props) => {
  const modulesManager = useModulesManager();
  const enableCustomDashboard = modulesManager.getConf(
    "fe-home",
    "HomePage.enableCustomDashboard",
    DEFAULT.ENABLE_CUSTOM_DASHBOARD
  );

  if (enableCustomDashboard) {
    return <Contributions contributionKey="home.HomePage.customDashboard" />;
  }

  return <Contributions contributionKey="home.HomePage.Container" {...props} />;
};

export default HomePage;
